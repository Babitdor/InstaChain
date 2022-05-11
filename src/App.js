import Decentragram from '../src/abis/Decentragram.json'
import Navbar from './components/Navbar';
import Main from './components/Main';
import { Component } from 'react';
// import Post from './Components/Post'
import Web3 from 'web3';
import * as IPFS from 'ipfs-http-client'
// import {create} from 'ipfs-http-client'

const ipfs = IPFS.create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' })
// const ipfs = create({ host: 'ipfs.infura.io', port: 5001, protocol: 'https' }) // leaving out the arguments will default to these values
class App extends Component {
  
  async componentWillMount() {
    await this.loadWeb3()
    await this.loadBlockchainData()
  }

  async loadWeb3() {
    if (window.ethereum) {
      window.web3 = new Web3(window.ethereum)
      await window.ethereum.request({method: "eth_requestAccounts"});
    }
    else if (window.web3) {
      window.web3 = new Web3(window.web3.currentProvider)
    }
    else {
      window.alert('Non-Ethereum browser detected. You should consider trying MetaMask!')
    }
  }

  async loadBlockchainData() {
    const web3 = window.web3
    // Load account and Balances
    const accounts = await web3.eth.getAccounts()
    const eth_value = await web3.eth.getBalance(accounts[0])/Math.pow(10,18)
    this.setState({ balance : eth_value })
    this.setState({ account: accounts[0] })
    
    
    // Network ID and Data
    const networkData = Decentragram.networks[await web3.eth.net.getId()]
    if(networkData) {
      const decentragram = new web3.eth.Contract(Decentragram.abi, networkData.address)
      this.setState({ decentragram })
      const imagesCount = await decentragram.methods.imageCount().call()
      this.setState({ imagesCount })


      // Loading images
      for (var i = 1; i <= imagesCount; i++) {
        const image = await decentragram.methods.images(i).call()
        this.setState({
          images: [...this.state.images, image]
        })
      }


      // Sorting the images based on highest likes images first
      this.setState({
        images: this.state.images.sort((a,b) => b.tipAmount - a.tipAmount )
      })
      this.setState({ loading: false})
    } else {
      window.alert('Decentragram contract not deployed to detected network.')
    }
  }

  captureFile = event => {

    event.preventDefault()
    const file = event.target.files[0]
    const reader = new window.FileReader()
    reader.readAsArrayBuffer(file)

    reader.onloadend = () => {
      this.setState({ buffer: Buffer(reader.result) })
      console.log('buffer', this.state.buffer)
    }
  }

  
  uploadImage = async(description) => {
    console.log("Submitting file to ipfs...")

    //Uploading file to the IPFS
    
      try{
      const uploadedResult = await ipfs.add((this.state.buffer))
      this.setState({result: uploadedResult.path })
      console.log('Ipfs result', uploadedResult)
      }catch(e) {
        console.log(e)
      }
      this.setState({ loading: true })
      this.state.decentragram.methods.uploadImage(this.state.result, description).send({ from: this.state.account }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
      
    
  })
}

  tipImageOwner(id, tipAmount) {
    this.setState({ loading: true })
    this.state.decentragram.methods.tipImageOwner(id).send({ from: this.state.account, value: tipAmount }).on('transactionHash', (hash) => {
      this.setState({ loading: false })
    })
  }

  constructor(props) {
    super(props)
    this.state = {
      balance: '',
      account: '',
      decentragram: null,
      images: [],
      loading: true,
      result: '',
    }

    this.uploadImage = this.uploadImage.bind(this)
    this.tipImageOwner = this.tipImageOwner.bind(this)
    this.captureFile = this.captureFile.bind(this)
  }








  render() {
        return (
          <div className="App">
            <Navbar balances={this.state.balance} accounts={this.state.account}/>
            <Main  captureFile={this.captureFile} uploadImage={this.uploadImage} images={this.state.images} tipImageOwner={this.tipImageOwner}/>
          </div>
        );
    }
}
export default App;

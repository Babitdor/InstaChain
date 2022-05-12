import React, { Component } from "react";
import './Main.css'
import Identicon from 'identicon.js';
import Button from '@mui/material/Button';
import Post from "./Post";
import {AiFillHeart} from 'react-icons/ai'
export default class Main extends Component {

      render() {

        return(
        <div>
        <Post captureFile={this.props.captureFile} uploadImage={this.props.uploadImage}/>
        
        { this.props.images.map((image, key) => {
            return(
              <div key={key}>
              <article className="Post">
            
            <header>

              <div className="Post-user">

                <div className="Post-user-profilepicture">

                  <img src={`data:image/png;base64,${new Identicon(image.author, 30).toString()}`} alt="profile-pic" />

                </div>

                <div className="Post-user-nickname">

                  <span>{image.author}</span>

                </div>

              </div>

            </header>

            <div className="Post-image">

              <div className="Post-image-bg">

                <img alt="posted-im" src={`https://ipfs.infura.io/ipfs/${image.hash}`} />

              </div>

            </div>

            <div className="Post-caption">
                
              <div className="btn"><Button
                name={image.id}
                onClick={(event) => {
                let tipAmount = window.web3.utils.toWei('0.1', 'Ether')
                console.log(event.currentTarget.name, tipAmount)
                this.props.tipImageOwner(event.currentTarget.name, tipAmount)}}><AiFillHeart color="red" fontSize={40}/></Button></div>
                <strong className="caption">{image.description}</strong> 

            </div>

          </article>

              </div>
            );
        })}
        </div>
        )    
      }
    }
        
    
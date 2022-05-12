# InstaChain - Blockchain Based Instagram Application

A Decentralized Instagram Platform, which allows a user to share Images, Videos.
The Likes system in instagram, is replaced using a Tip feature. Where if you like a Post, you provide a tip of 0.1 ETH to the Profile.
Basically similar to how you support a content creator.

It was built using Solidity and React JS. <br>

Web3Js was used to Autheticate/Retrieve Crypto Wallet Data.<br>

Ganache was used as the testing Blockchain Enivornment.<br>

Chai and chai-as-promised was used for testing the Solidity contracts.

Truffle was used to Compile/Deploy the contracts to the Blockchain.

## Screenshots ![InstaChain](https://user-images.githubusercontent.com/57758789/168140247-c547831a-6857-4303-a21b-af6b61ccd5ff.png)
![Login](https://user-images.githubusercontent.com/57758789/168141759-f39aa5fc-691c-4510-b9f0-b26a0ae0147d.png)
![InstaChain](https://user-images.githubusercontent.com/57758789/168141772-69d5f078-9357-41b6-99ec-47e17ae1cf72.png)


## Available Scripts

In the project directory, you can run:

### `npm install`

To install all the necessary packages.

## `open Ganache`
Create a Blockchain server,
Take one of the Ganacher and link to your Metamask Wallet by pasting the secret key. (Localhost 8575 network)

## `truffle compile`
To compile the Solidity Contracts.

## `truffle migrate --reset`
To migrate the contracts to Ganache Blockchain Server.

## After this you are done!

### Just run `npm start` and Login with Metamask on Popup.

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.





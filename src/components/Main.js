import React, { Component } from "react";
import img1 from '../assets/2.jpg'
import './Main.css'
import Post from "./Post";
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

                  <img src={img1} alt="John D. Veloper" />

                </div>

                <div className="Post-user-nickname">

                  <span>{image.author}</span>

                </div>

              </div>

            </header>

            <div className="Post-image">

              <div className="Post-image-bg">

                <img alt="Icon Living" src={`https://ipfs.infura.io/ipfs/${image.hash}`} />

              </div>

            </div>

            <div className="Post-caption">

              <strong>{image.description}</strong> 

            </div>

          </article>

              </div>
            );
        })}
        </div>
        )

      
      
      
      }
    }
        
    
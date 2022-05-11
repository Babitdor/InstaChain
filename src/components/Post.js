import * as React from 'react';
import { Component } from 'react'
import IconButton from '@mui/material/IconButton';
import { styled } from '@mui/material/styles';
// import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { TextField } from '@mui/material';
import './Post.css'

const Input = styled('input')(
    {display: 'none',}
);
  
  class Post extends Component {

    render() {
    return (
      <div>
        
        <div className='post-section'>
        <form onSubmit={(event) => {event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)}} >

        <input id="imageDescription" type="text" ref={(input) => { this.imageDescription = input }} className="form-control" placeholder="Write a caption" required />
        
        <div className='buttons-component'>
        <label htmlFor="icon-button-file">             
          <Input type='file' accept=".jpg, .jpeg, .png, .bmp, .gif" onChange={this.props.captureFile} id="icon-button-file"/>
          <IconButton color="secondary" aria-label="upload picture" component="span">
          <div className='camera-icon'><PhotoCamera fontSize='large'/></div>
          </IconButton>
        </label>
        <button type="submit" className='button'><SendIcon/></button>
        </div>          
        
        </form>
        </div>
        
      
      </div>
    );
  }
}

export default Post;
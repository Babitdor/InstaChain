import * as React from 'react';
import { Component } from 'react'
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import PhotoCamera from '@mui/icons-material/PhotoCamera';
// import { TextField } from '@mui/material';
import './Post.css'

const Input = styled('input')(
    {display: 'none',}
);
  
  class Post extends Component {

    render() {
    return (
      <div className='post-section'>
        <form onSubmit={(event) => {
                event.preventDefault()
                const description = this.imageDescription.value
                this.props.uploadImage(description)
              }} >
        <div><input
                        id="imageDescription"
                        type="text"
                        ref={(input) => { this.imageDescription = input }}
                        className="form-control"
                        placeholder="Write a caption"
                        required /></div>
        <div>
             <label htmlFor="contained-button-file"> 
                <Input 
                        type='file' 
                        accept=".jpg, .jpeg, .png, .bmp, .gif" 
                        onChange={this.props.captureFile} 
                        id="contained-button-file"/>

                 <Button 
                    type="submit"   
                    variant="contained" 
                    component="span" 
                    endIcon={<PhotoCamera />}>
                    Upload!
                </Button>
                <button type="submit">Submit</button>
                 </label>     
        </div>
        </form>
        
      
      </div>
    );
  }
}

export default Post;
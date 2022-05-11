import './Loading.css'
import logo from '../assets/logo.png'
import meta from '../assets/meta.png'
import React from 'react'
import CircularProgress from '@mui/material/CircularProgress';
function Loading() {
  return (
    <div className='container'>
        <div className='card'>
            <img src={logo} alt="" className='img-logo'/>
            <img src={meta} alt="" className='img-logo-meta'/>
            <div className='progressbar'><CircularProgress color="success" /></div>
            <h5 className='title'>Link your Metamask wallet</h5>

        </div>
        
    </div>
  )
}

export default Loading
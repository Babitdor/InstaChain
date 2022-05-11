import './Navbar.css'
import * as React from 'react'
import logo from '../assets/logo.png'
import eth from '../assets/eth.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import meta from '../assets/meta.png'
import PersonPinIcon from '@mui/icons-material/PersonPin';

function Navbar({balances,accounts}) {
    
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
    

        return (

           <nav className="Nav">

             <div className="Nav-menus">

               <div className="Nav-brand">

                 

                   <div className='img-container'><img src={logo} alt="" className='img-logo'/></div>
                   <div>
                       <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <PersonPinIcon fontSize='large' color='secondary'/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                            
                            <div className='container-drop'>
                            <div className='dropdown'>
                              
                              <div className='act-container'><img src={meta} alt="" className='img-logo-eth'/><h3 className='act-heading'>Account</h3><h5 className='act-title'>{accounts}</h5></div>
                              <img src={eth} alt="" className='img-logo-eth'/><h5>{balances}</h5>
                            </div>
                            </div>
                        </Menu>
                    </div>
                 

               </div>

             </div>

           </nav>

       );

}

export default Navbar;
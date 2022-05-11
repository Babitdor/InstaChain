import './Navbar.css'
import * as React from 'react'
import logo from '../assets/logo.png'
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
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

                 

                   <div><img src={logo} alt="" className='img-logo'></img></div>
                   <div>
                       <Button
                            id="basic-button"
                            aria-controls={open ? 'basic-menu' : undefined}
                            aria-haspopup="true"
                            aria-expanded={open ? 'true' : undefined}
                            onClick={handleClick}>
                            <PersonPinIcon fontSize='large'/>
                        </Button>
                        <Menu
                            id="basic-menu"
                            anchorEl={anchorEl}
                            open={open}
                            onClose={handleClose}
                            MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>
                            <div className='dropdown'>
                            <h5>Account : {accounts}</h5>
                            <h5>Balance : {balances}</h5>
                            </div>
                        </Menu>
                    </div>
                 

               </div>

             </div>

           </nav>

       );

}

export default Navbar;
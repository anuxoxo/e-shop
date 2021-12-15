import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './Navbar.css'
import assets from '../../assets';

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';

function Navbar() {
    const [user] = useContext(UserContext);

    return (
        <div className="nav">
            <ul className="navbar">
                <div className="navItem">
                    <a href="/">
                        <img src={assets.logo} alt="logo" className="nav__logo" />
                        <span className="yellow">E-</span>Shop
                    </a>
                </div>

                <div className="navItem">
                    <li><a href="/">Men </a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Kids</a></li>
                </div>

                <div className="navItem">
                    <IconButton color="inherit"  >
                        <SearchOutlinedIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit">
                        {(user.authorized) ? (
                            <img src={user.photoURL} alt="user-img" className="userImg" />
                        ) : (
                            <PersonOutlineOutlinedIcon fontSize="large" />
                        )}
                    </IconButton>
                </div>
            </ul>
        </div >
    )
}

export default Navbar

import React from 'react'
import './Navbar.css'

// Assets
import logo from '../../assets/logo.png';

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';
function Navbar() {
    return (
        <nav>
            <ul className="navbar">
                <div className="left">
                    <a href="/" className="a__logo">
                        <img src={logo} alt="logo" className="nav__logo" />
                        <span className="yellow">E-</span>Shop
                    </a>
                </div>

                <div className="center">
                    <li><a href="/">Men </a></li>
                    <li><a href="/">Women</a></li>
                    <li><a href="/">Kids</a></li>
                </div>

                <div className="right">
                    <IconButton color="inherit"  >
                        <SearchOutlinedIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit">
                        <ShoppingCartOutlinedIcon fontSize="large" />
                    </IconButton>
                    <IconButton color="inherit">
                        <PersonOutlineOutlinedIcon fontSize="large" />
                    </IconButton>
                </div>
            </ul>
        </nav >
    )
}

export default Navbar

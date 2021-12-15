import React, { useContext } from 'react'
import { UserContext } from '../../context/userContext';
import './Navbar.css'
import assets from '../../assets';

// Icons
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import ShoppingCartOutlinedIcon from '@mui/icons-material/ShoppingCartOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import { IconButton } from '@mui/material';

// firebase
import '../../firebase/firebase';
import { getAuth, signOut } from "firebase/auth";
const auth = getAuth();

function Navbar() {
    const [user, setUser] = useContext(UserContext);
    const logOut = () => {
        signOut(auth).then(() => {
            setUser({
                authorized: false,
                displayName: "",
                photoURL: "",
            })
        }).catch((error) => {
            alert("Error signing out user : ", error.message);
        });
    }
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
                    {(user.authorized) ? (
                        <button onClick={logOut} title="Log Out">
                            <img src={user.photoURL} alt="user-img" className="userImg" />
                        </button>
                    ) : (
                        <IconButton color="inherit">
                            <PersonOutlineOutlinedIcon fontSize="large" />
                        </IconButton>
                    )}
                </div>
            </ul>
        </div >
    )
}

export default Navbar

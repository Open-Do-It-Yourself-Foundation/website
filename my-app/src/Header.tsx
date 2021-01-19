import React from 'react'
import './Header.css';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {
    return (
        <div className='menu-container'>
            <div className="menu">
                <div className="date">August 14, 2021</div>
                <div className="signup">
                    <AccountBoxIcon className='header__icons'/>
                    Sign Up
                </div>
                <div className="login">
                    <AccountCircleIcon className='header__icons'/> 
                    Login
                </div>
            </div>
        </div>
    )
}

export default Header

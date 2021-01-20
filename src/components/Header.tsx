import React, {useState} from 'react'
import './header.css';
import {Link} from 'react-router-dom';
import AccountBoxIcon from '@material-ui/icons/AccountBox';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Header = () => {

  const [date,setDate]=useState(new Date());

    return (
        <div className='menu-container'>
            <div className="menu">
                <div className="date"> Today : {date.toLocaleDateString()}</div>
               <div className="auth">
               <Link to='/signup' className='header__link'>
                <div className="signup">
                    <AccountBoxIcon className='header__icons'/>
                    Sign Up
                </div>
                </Link>
                <Link to='/login' className='header__link'>
                <div className="login">
                    <AccountCircleIcon className='header__icons'/> 
                    Login
                </div>
                </Link>
                </div>
            </div>
        </div>
    )
}

export default Header

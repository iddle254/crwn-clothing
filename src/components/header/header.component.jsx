import React from 'react';
import {Link } from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/original.svg';
import './header.styles.scss';

function Header() {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
                <div>crwn-clothing</div>
            </Link>
            <div className='options'>
                <Link className='option'>
                shop
                </Link>
                <Link className='option'>
                contact
                </Link>
            </div>

        </div>
    )
}

export default Header

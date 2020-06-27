import React from 'react';
import {Link } from 'react-router-dom';
import {connect} from 'react-redux';
import {ReactComponent as Logo} from '../../assets/original.svg';
import './header.styles.scss';
import {auth } from '../../firebase/firebase.utils';

function Header({ currentUser }) {
    return (
        <div className='header'>
            <Link className='logo-container' to='/'>
                <Logo className='logo'/>
                
            </Link>
            <div className='options'>
                <Link className='option'>
                shop
                </Link>
                <Link className='option'>
                contact
                </Link>
                {
                    currentUser?
                    <div className='option' onClick={()=>auth.signOut()}>SIGNOUT</div>
                    :<Link className='option' to='/signin'>SIGNIN</Link>
                }
            </div>

        </div>
    )
}

const mapStateToProps = state => ({
    currentUser: state.user.currentUser
});

export default connect(mapStateToProps)(Header)

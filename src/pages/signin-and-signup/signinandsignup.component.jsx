import React from 'react';
import './signinandsignup.styles.scss';
import Signin from '../../components/signin/signin.component';
import Signup from '../../components/signup/signup.component';

function SigninandSignup() {
    return (
        <div className='signin-and-signup'>
            <Signin/>
            <Signup/>
        </div>
    )
}

export default SigninandSignup

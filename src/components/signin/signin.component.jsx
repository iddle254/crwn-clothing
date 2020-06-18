import React, { Component } from 'react';
import { signInWithGoogle} from '../../firebase/firebase.utils';
import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';
import './signin.styles.scss'


class Signin extends Component {
    constructor(props) {
        super(props)

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({ email:'', password:''});
    }

    handleChange= event => {
        const{value, name} = event.target;
        this.setState({[name]: value})
    }

    render() {
        return (
            <div className='signin'>
                <h1 className='header'>already have an account</h1>
                <span className='signin-header'>signin with email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput name='email' 
                    type='email' 
                    value={this.state.email}
                    handleChange={this.handleChange}
                    label='Email' 
                    required/> 
                    
                    
                    <FormInput
                    name='password' 
                    type='password' 
                    value={this.state.password}
                    label='Password'
                    onChange={this.handleChange} 
                    required/> 
                    
                    
                    <div className='buttons'>
                    <CustomButton type='submit'>
                        signin
                    </CustomButton>
                    <CustomButton onClick={signInWithGoogle} isGoogleSignin>
                        Google signin
                    </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default Signin
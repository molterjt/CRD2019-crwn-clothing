import React from 'react';
import './signin.styles.scss';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';

import {signInWithGoogle} from "../../firebase/firebase.utils";

class SignIn extends React.Component{
    constructor(props){
        super(props);

        this.state = {
            email: '',
            password: '',
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.setState({
            email: '',
            password: '',
        })
    };
    handleChange = (event) => {
        const {value, name} = event.target;
        this.setState({ [name]: value });

    }
    render(){
        return(
            <div className={'signin'}>
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                <form onSubmit={this.handleSubmit}>
                    <FormInput
                        name={"email"}
                        value={this.state.email}
                        required={true}
                        handleChange={this.handleChange}
                        label={"Email"}
                    />

                    <FormInput
                        name={"password"}
                        type={"password"}
                        value={this.state.password}
                        required={true}
                        handleChange={this.handleChange}
                        label={"Password"}
                    />
                    <div className={"buttons"}>
                        <CustomButton type={'submit'}>Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            {' '}
                            Sign in with Google{' '}
                        </CustomButton>
                    </div>


                </form>
            </div>
        );
    }
}
export default SignIn;
import React from 'react';
import SignIn from '../../components/signin/signin.comp';
import SignUp from '../../components/signup/signup-comp';
import './registration.styles.scss'

const Registration = () => (
    <div className={"registration"}>
        <SignIn/>
        <SignUp/>
    </div>
)

export default Registration;
import React from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const AuthProvider = ({children}) => {

    const registerUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser=(email,password)=>{
        return signInWithEmailAndPassword(auth,email,password)
    }

    const authInfo={
        registerUser,
        signInUser,
    }
    return (
        <Authcontext value={authInfo}>
            {children}
        </Authcontext>
    );
};

export default AuthProvider;
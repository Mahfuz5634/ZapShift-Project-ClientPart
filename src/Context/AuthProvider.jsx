import React, { useEffect, useState } from 'react';
import { Authcontext } from './Authcontext';
import { createUserWithEmailAndPassword, GoogleAuthProvider, onAuthStateChanged, sendPasswordResetEmail, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import { auth } from '../Firebase/firebase.config';

const googleProvider= new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const [user,setUser]=useState(null);
    const [loading,setloading]=useState(true);



   //observe user state
   useEffect(()=>{
     const unsubscribe= onAuthStateChanged(auth,(curUser)=>{
       setUser(curUser);
       setloading(false);
     })
     return ()=>{
        unsubscribe()
     }
   },[])


    //register
    const registerUser =(email,password)=>{
        setloading(true);
        return createUserWithEmailAndPassword(auth,email,password)
    }
    
    //login
    const signInUser=(email,password)=>{
         setloading(true);
        return signInWithEmailAndPassword(auth,email,password)
    }
    
    //googlesignin
    const signIngoogle=()=>{
         setloading(true);
        return signInWithPopup(auth,googleProvider);
    }

    //logout
    const logOut=()=>{
        setloading(true);
        return signOut(auth);
    }
    
    //updateProfile
    const updateUserProfile=(profile)=>{
        return updateProfile(auth.currentUser,profile)
    }

    //password-reset
    const resetPassword=(email)=>{
      return sendPasswordResetEmail(auth,email);
    }

    const authInfo={
        registerUser,
        signInUser,
        signIngoogle,
        user,
        loading,
        logOut,
        updateUserProfile,
        resetPassword,


        

    }
    return (
        <Authcontext value={authInfo}>
            {children}
        </Authcontext>
    );
};

export default AuthProvider;
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from 'firebase/auth';
import React, { useEffect, useState } from 'react';
import { createContext } from 'react';
import auth from '../firebase/firebase.config';
import { GoogleAuthProvider } from "firebase/auth";
export const authContext=createContext()
const AuthProvider = ({children}) => {
    const googleProvider = new GoogleAuthProvider();
    const[user,setUser]=useState(null);
    const[loading,setLoading]=useState(true)
    const createUser=(email,password)=>{
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const loginUser=(email,password)=>{
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    const updateUserProfile=(user,name,photoURL)=>{
        return updateProfile(user,{
             displayName:name, photoURL:photoURL
         })
     }
     const googleLogin=()=>{
        return signInWithPopup(auth, googleProvider)
     }
     const logOut=()=>{
        setLoading(true)
       return signOut(auth)
     }
    useEffect(()=>{
        const observer = onAuthStateChanged(auth,CurrentUser=>{
            setLoading(false)
             setUser(CurrentUser)
        })
        return ()=>{
            observer()
        }
    },[])
    const authInfo={
        user,
        createUser,
        loginUser,
        updateUserProfile,
        logOut,
        googleLogin
    }
    return (
        <authContext.Provider value={authInfo}>
             {children}
        </authContext.Provider>
    );
};

export default AuthProvider;
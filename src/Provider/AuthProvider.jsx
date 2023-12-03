import  { createContext, useEffect } from 'react';
import { GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { useState } from 'react';
import { app } from '../Firebase/Firebase.confic';
import useAxiosPublic from '../hooks/useAxiosPublic';






export const AuthContext = createContext(null);

const auth = getAuth(app);

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const axiospublic =useAxiosPublic();
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) =>{
        return createUserWithEmailAndPassword(auth, email, password)
    }
    const signIn = (email, password) =>{
        return signInWithEmailAndPassword(auth, email, password);
    }
    const googleLogIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider);
    }

    // observe auth state change
    useEffect( ()=>{
        const unsubscribe = onAuthStateChanged(auth, (currentUser) =>{
            // console.log('auth state change', currentUser);
            setUser(currentUser);
            if(currentUser){
                const userInfo={email: currentUser.email}
                axiospublic.post('/jwt', userInfo)
                .then(res=>{
                    if(res.data.token){
                        localStorage.setItem('access-token',res.data.token )
                    }
                })

            }
            else{
                localStorage.removeItem('access-token')

            }
            setLoading(false);
        });
        return () =>{
            unsubscribe();
        }
    }, [axiospublic])
    const updateInfo = (name, photo) =>{
        console.log(name, photo)
        updateProfile(auth.currentUser, {
            displayName: `${name}`, photoURL:`${photo}`
        }).then(() => {
            console.log('meo')
        }).catch((error) => {
            console.error(error);
        });
    }
    const logOut = () =>{
        return signOut(auth)
    } 
    const authInfo = {
        user, 
        loading,
        updateInfo,
        createUser,
        signIn,
        googleLogIn,
        logOut
    }
   
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;
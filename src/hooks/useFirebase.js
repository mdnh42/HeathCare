import { getAuth, signInWithPopup, GoogleAuthProvider, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut } from 'firebase/auth'
import { useEffect, useState } from 'react';
import initializeFirebase from '../Firebase/firebase.init'

initializeFirebase();

const useFirebase = () => {
    const auth = getAuth();
    const googleProvider = new GoogleAuthProvider();

    const [user, setUser] = useState({})
    const [error, setError] = useState('')
    const [isLoaing, setIsLoading] = useState(true)


    const signInWithGoogle = () => {
        setIsLoading(true)
        return signInWithPopup(auth, googleProvider)

    }

    // sign up with email and password
    const signUpWithEmail = (email, password) => {
        setIsLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)

    }

    // login with email and password
    const signInWithEmail = (email, password)=>{
        setIsLoading(true)
        return signInWithEmailAndPassword(auth, email, password);
    }

    

    const logOut = () => {
        signOut(auth)
            .then(() => setUser({}))
            .finally(() => setIsLoading(false))
    }

    // special observer
    useEffect(() => {
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            } else {
                // User is signed out
            }
            setIsLoading(false)
        });
    }, [])


    return {
        user,
        error,
        setError,
        isLoaing,
        setIsLoading,
        signInWithGoogle,
        signUpWithEmail,
        signInWithEmail,
        logOut
    };

}

export default useFirebase;
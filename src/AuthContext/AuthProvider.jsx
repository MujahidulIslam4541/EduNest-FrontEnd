import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, FacebookAuthProvider } from "firebase/auth";
import { app } from "../components/firebase/Firebase.Config";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const googleProvider = new GoogleAuthProvider();
    const facebookProvider = new FacebookAuthProvider()

    // Sign Up User
    const createUser = (email, password) => {
        console.log(email)
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // Sign In User
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    // signOut User
    const logOut = () => {
        setLoading(true)
        return signOut(auth)
    }

    // LogIn With Google
    const googleLogIn = () => {
        setLoading(true)
        return signInWithPopup(auth, googleProvider)
    }

    // Login With Facebook
    const facebookLogin = () => {
        setLoading(true)
        return signInWithPopup(auth, facebookProvider)
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            console.log('currentUser ', currentUser)
            setLoading(false)
        })
        return () => {
            unsubscribe;
        }
    }, [])



    const authInfo = {
        user,
        loading,
        createUser,
        loginUser,
        logOut,
        googleLogIn,
        facebookLogin
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

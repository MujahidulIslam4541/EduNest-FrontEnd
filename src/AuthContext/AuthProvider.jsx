import { createContext, useEffect, useState } from "react"
import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { app } from "../components/firebase/Firebase.Config";


export const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)



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
        logOut
    }
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    )
}

export default AuthProvider

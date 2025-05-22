import { createContext, useState } from "react"
import { getAuth } from "firebase/auth";
import { app } from "../components/firebase/Firebase.Config";


const AuthContext = createContext(null)

const auth = getAuth(app);

const AuthProvider = () => {
    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const authInfo = {
        user,
        loading
    }
    return (
        <AuthContext.Provider value={authInfo}>

        </AuthContext.Provider>
    )
}

export default AuthProvider

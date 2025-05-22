import React, { useContext } from 'react'
import { AuthContext } from '../../../AuthContext/AuthProvider'


const UseAuth = () => {
 return useContext(AuthContext)
}

export default UseAuth

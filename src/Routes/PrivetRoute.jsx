import React from 'react'
import UseAuth from '../components/hooks/UseAuth/UseAuth'
import { Navigate } from 'react-router'
import Loading from '../components/hooks/Loading/Loading'

const PrivetRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    if (loading) {
        return <Loading />
    }
    if (user) {
       return children 
    }
    return <Navigate to='/signIn'></Navigate>
}

export default PrivetRoute


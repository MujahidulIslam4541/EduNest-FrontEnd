import React from 'react'
import UseAuth from '../components/hooks/UseAuth/UseAuth'
import { Navigate, useLocation } from 'react-router'
import Loading from '../components/hooks/Loading/Loading'

const PrivetRoute = ({ children }) => {
    const { user, loading } = UseAuth()
    const location = useLocation()
    if (loading) {
        return <Loading />
    }
    if (user) {
        return children
    }
    return <Navigate to='/signIn' state={{ from: location }} replace ></Navigate>
}

export default PrivetRoute


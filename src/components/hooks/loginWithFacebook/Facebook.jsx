import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import UseAuth from "../UseAuth/UseAuth"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router";

const Facebook = () => {
  const { facebookLogin } = UseAuth()

  const navigate = useNavigate()
  const location = useLocation()

  const from = location.state?.from?.pathname || "/";

  const handleFacebookLogin = () => {
    facebookLogin().then(result => {
      const user = result.user;
      if (user) {
        toast.success(`Welcome, ${user.displayName || "User"}! Google Login successful.`);
        navigate(from, { replace: true });
      }
    })
  }
  return (
    <div>
      <FaFacebook onClick={handleFacebookLogin} size={30} />
    </div>
  )
}

export default Facebook

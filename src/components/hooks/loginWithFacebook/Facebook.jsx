import React from 'react'
import { FaFacebook } from 'react-icons/fa'
import UseAuth from "../UseAuth/UseAuth"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router";
import UseAxiosPublic from '../UseAxiosPublic/UseAxiosPublic';

const Facebook = () => {
  const { facebookLogin } = UseAuth()

  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = UseAxiosPublic()

  const from = location.state?.from?.pathname || "/";

  const handleFacebookLogin = () => {
    facebookLogin().then(result => {
      const user = result.user;
      if (user) {

        const userInfo = {
          name: user?.displayName,
          email: user?.email,
          role: 'student',
          degree: 'not Available'
        }

        // google login user info save in database
        axiosPublic.post('/users', userInfo).then(() => {

          toast.success(`Welcome, ${user.displayName || "User"}! facebook Login successful.`);
          navigate(from, { replace: true });
        })
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

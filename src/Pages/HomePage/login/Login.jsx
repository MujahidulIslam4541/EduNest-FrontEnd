import React, { useState } from 'react'
import loginLottieData from '../../../assets/Lotti/Login.json'
import Lottie from 'lottie-react'
import { Link, useNavigate } from 'react-router'
import Google from '../../../components/hooks/LoginWithGoogle/Google'
import Facebook from '../../../components/hooks/loginWithFacebook/facebook'
import { FaEye, FaEyeSlash } from 'react-icons/fa'
import UseAuth from '../../../components/hooks/UseAuth/UseAuth'
import toast from 'react-hot-toast'

const Login = () => {
  const [showPassword, setShowPassword] = useState(false)
  const { loginUser } = UseAuth();
  const navigate=useNavigate()

  const handleLogin = (e) => {
    e.preventDefault(); // Prevent the default form submission

    // Get email and password values from the form
    const email = e.target.email.value;
    const password = e.target.password.value;

    // Attempt to log in the user
    loginUser(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          toast.success("Login successful!");
          navigate('/')
        }
      })
      .catch((error) => {
        if (error) {
          toast.error('Please enter valid password')
          return;
        }
      });

  };

  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12 w-full max-w-6xl">

        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={loginLottieData} loop={true} />
        </div>

        {/* Login Card */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Login to Your Account</h2>
            <p className="text-center text-sm text-gray-500 mb-4">Welcome back! Please enter your credentials to continue.</p>

            <form onSubmit={handleLogin} className="space-y-4">
              {/* Email Input */}
              <div>
                <label className="label text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>

              {/* Password Field */}
              <div className="relative">
                <label className="label text-sm font-medium text-gray-700">Password</label>

                {/* Input Field with extra padding on right for icon */}
                <input
                  type={showPassword ? 'text' : 'password'}
                  name="password"
                  className="input input-bordered w-full pr-12"  // <-- pr-12 ensures padding space for icon
                  placeholder="Enter your password"
                  required
                />

                {/* Eye Icon Button */}
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-[32px] text-gray-500" // Adjust top based on your input height
                >
                  {showPassword ? <FaEyeSlash size={20} /> : <FaEye size={20} />}

                </button>
              </div>

              {/* Forgot password and signup */}
              <div className="flex justify-between text-sm text-gray-600">
                <a href="#" className="hover:underline text-blue-600">Forgot password?</a>
                <span>
                  Don’t have an account?
                  <Link to="/signUp" className="ml-1 font-medium text-blue-600 hover:underline">Sign up</Link>
                </span>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
            </form>

            {/* Divider */}
            <div className="divider text-gray-400">OR</div>

            {/* Social Login */}
            <div className="flex justify-center gap-4">
              <Google />
              <Facebook />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login

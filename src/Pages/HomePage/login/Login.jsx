import React from 'react'
import loginLottieData from '../../../assets/Lotti/Login.json'
import Lottie from 'lottie-react'
import { Link } from 'react-router'
import Google from '../../../components/hooks/LoginWithGoogle/Google'
import Facebook from '../../../components/hooks/loginWithFacebook/facebook'

const Login = () => {
  const handleLogin = (e) => {
    e.preventDefault()
    const email = e.target.email.value;
    const password = e.target.password.value;
    console.log({ email, password })

  }
  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-6xl">

        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={loginLottieData} />
        </div>

        {/* Login Card */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">Login to Your Account</h2>

            <form onSubmit={handleLogin} className="space-y-4">
              <div>
                <label className="label font-medium">Email</label>
                <input
                  type="email"
                  name="email"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                />
              </div>
              <div>
                <label className="label font-medium">Password</label>
                <input
                  type="password"
                  name="password"
                  required
                  className="input input-bordered w-full"
                  placeholder="Enter your password"
                />
              </div>

              <div className="flex justify-between items-center text-sm">
                <a className="link link-hover text-blue-600">Forgot password?</a>
                <p className="text-sm text-center">
                  Don't have an account?
                  <Link to="/signUp" className="text-blue-600 font-medium ml-1 hover:underline">
                    Create one
                  </Link>
                </p>

              </div>

              <button type="submit" className="btn btn-neutral w-full mt-2">Login</button>
            </form>
            <div className='divider'>OR</div>
            <div className='flex justify-center gap-2'>
              <Google></Google>
              <Facebook></Facebook>
            </div>
          </div>
        </div>

      </div>
    </div>

  )
}

export default Login

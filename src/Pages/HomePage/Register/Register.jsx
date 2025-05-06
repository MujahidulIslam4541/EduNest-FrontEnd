import Lottie from 'lottie-react'
import React from 'react'
import { Link } from 'react-router'
import RegisterLottieData from '../../../assets/Lotti/register.json'
import { FaFileUpload } from 'react-icons/fa'
import Google from '../../../components/hooks/LoginWithGoogle/Google'
import Facebook from '../../../components/hooks/loginWithFacebook/facebook'
import { FiUploadCloud } from 'react-icons/fi'


const Register = () => {
  const handleRegister = (e) => {
    e.preventDefault()
    const data = e.target;
    const name = data.name.value
    const email = data.email.value
    const password = data.password.value
    // const name=e.target.name.value;
    // const email=e.target.email.value;
    // const password=e.target.value;
    console.log({ name, email, password })
  }
  return (
    <div className="hero bg-base-200 min-h-screen px-4">
      <div className="hero-content flex-col lg:flex-row-reverse gap-10 w-full max-w-6xl">

        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={RegisterLottieData} />
        </div>

        {/* register section */}
        <div className="card bg-base-100 w-full max-w-md shadow-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center mb-4">Create A New Account</h2>
            <form onSubmit={handleRegister} action="" className='space-y-4'>
              {/* name Field */}
              <div>
                <label className='label font-medium'>Name</label>
                <input type="text"
                  name='name'
                  className='input input-border w-full'
                  placeholder='Please Enter Your Name'
                  required />
              </div>
              {/* email Field */}
              <div>
                <label className='label font-medium'>Email</label>
                <input type="email"
                  name='email'
                  className='input input-border w-full'
                  placeholder='Please Enter Your Email'
                  required />
              </div>
              {/* password field  */}
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
              {/* Image Filed */}
              <div>
                <label className='label font-medium mb-1'>Your Photo:</label>
                <div className='relative w-40'>
                  <input
                    className='border rounded w-full p-2 pr-10'
                    type='file'
                  />
                  <FiUploadCloud className='absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 text-lg' />

                </div>
              </div>
              {/* Go to login page */}
              <div>
                <p className="text-sm text-center">
                  Already have an account?
                  <Link to="/SignIn" className="text-blue-600 font-medium ml-1 hover:underline">
                    SignIn
                  </Link>
                </p>
              </div>
              {/* Submit Button */}
              <button type='submit' className='btn w-full btn-neutral'> SignUp</button>
            </form>
            <div className="divider">OR</div>
            <div className='flex gap-2 justify-center'>
              <Google></Google>
              <Facebook></Facebook>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

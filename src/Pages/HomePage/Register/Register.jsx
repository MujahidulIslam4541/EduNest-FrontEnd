import Lottie from 'lottie-react';
import { Link, useNavigate } from 'react-router-dom'; // Fixed: should be react-router-dom
import RegisterLottieData from '../../../assets/Lotti/register.json';
import Google from '../../../components/hooks/LoginWithGoogle/Google';
import Facebook from '../../../components/hooks/loginWithFacebook/facebook';
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { useState } from 'react';
import toast from 'react-hot-toast';
import UseAuth from '../../../components/hooks/UseAuth/UseAuth';

const Register = () => {
  const [showPassword, setShowPassword] = useState(false)
  const navigate = useNavigate()
  const { createUser, updateUserProfile } = UseAuth()

  const handleRegister = (e) => {
    e.preventDefault(); // Prevent default form submission

    // Extract form input values
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const photo = form.photo.value;
    const password = form.password.value;
    const terms = form.terms.checked;

    // Check if terms & conditions are accepted
    if (!terms) {
      toast.error("Please accept our Terms & Conditions.");
      return;
    }

    // Validate email format
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      toast.error('Please enter a valid email address');
      return;
    }

    // Validate password length
    if (!password || password.length < 8) {
      toast.error('Password must be at least 8 characters');
      return;
    }

    // Attempt to create user with Firebase
    createUser(email, password)
      .then(result => {
        const user = result.user;
        if (user) {
          // Show success message on successful registration
          toast.success("Welcome aboard! Your account has been created.");

          // UpdateUser Profile
          updateUserProfile(name, photo)
            .then(() => {
              console.log('user profile updated')
            })
          navigate('/')
        }
      })
      .catch((error) => {
        // Show error message if registration fails
        if (error) {
          toast.error(error.message);
          return; // ✅ Fixed typo: message instead of massage
        }
      });
  };


  return (
    <div className="hero min-h-screen bg-base-200 px-4">
      <div className="hero-content flex-col-reverse lg:flex-row-reverse gap-12 w-full max-w-6xl">

        {/* Lottie Animation */}
        <div className="w-full max-w-md">
          <Lottie animationData={RegisterLottieData} loop={true} />
        </div>

        {/* Register Form Card */}
        <div className="card w-full max-w-md bg-base-100 shadow-xl rounded-2xl">
          <div className="card-body">
            <h2 className="text-2xl font-bold text-center text-gray-800 mb-2">Create A New Account</h2>
            <p className="text-sm text-gray-500 text-center mb-4">Join EduNest and start learning today!</p>

            <form onSubmit={handleRegister} className="space-y-4">

              {/* Name Field */}
              <div>
                <label className="label text-sm font-medium text-gray-700">Name</label>
                <input
                  type="text"
                  name="name"
                  className="input input-bordered w-full"
                  placeholder="Enter your name"
                  required
                />
              </div>

              {/* Email Field */}
              <div>
                <label className="label text-sm font-medium text-gray-700">Email</label>
                <input
                  type="email"
                  name="email"
                  className="input input-bordered w-full"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Photo Field */}
              <div>
                <label className="label text-sm font-medium text-gray-700">Photo URL</label>
                <input
                  type="url"
                  name="photo"
                  className="input input-bordered w-full"
                  placeholder="Enter your photo URL"
                  required
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

              {/* checkbox  */}
              <label className="label">
                <input type="checkbox" name='terms' className="checkbox" />
                Accept Our Terms & Condition
              </label>

              {/* Login Redirect */}
              <p className="text-sm text-center text-gray-600">
                Already have an account?
                <Link to="/signIn" className="ml-1 text-blue-600 font-medium hover:underline">
                  Sign In
                </Link>
              </p>

              {/* Submit Button */}
              <button type="submit" className="btn btn-neutral w-full mt-2">
                Sign Up
              </button>
            </form>

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
  );
};

export default Register;

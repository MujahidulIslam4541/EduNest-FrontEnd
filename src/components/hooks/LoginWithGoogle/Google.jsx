import { FcGoogle } from "react-icons/fc"
import UseAuth from "../UseAuth/UseAuth"
import toast from "react-hot-toast"
import { useLocation, useNavigate } from "react-router";
import UseAxiosPublic from "../UseAxiosPublic/UseAxiosPublic";


const Google = () => {
  const { googleLogIn } = UseAuth();
  const navigate = useNavigate()
  const location = useLocation()
  const axiosPublic = UseAxiosPublic()

  const from = location.state?.from?.pathname || "/";

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        if (user) {
          const userInfo = {
            name: user?.displayName,
            email: user?.email,
            role: 'student',
            degree: 'not Available'
          }
          // google login user info save in database
          axiosPublic.post('/users', userInfo).then((res) => {
            console.log(res.data)
            toast.success(`Welcome, ${user.displayName || "User"}! Google Login successful.`);
            navigate(from, { replace: true });
          })


        }
      })
      .catch((error) => {
        if (error) {
          toast.error(`Google Login failed: ${error.message || "Something went wrong."}`);
        }
      });
  };

  return (
    <div>
      <button onClick={handleGoogleLogIn}><FcGoogle size={30} /></button>
    </div>
  )
}

export default Google

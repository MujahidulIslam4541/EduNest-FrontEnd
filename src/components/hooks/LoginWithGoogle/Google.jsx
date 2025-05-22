import { FcGoogle } from "react-icons/fc"
import UseAuth from "../UseAuth/UseAuth"
import toast from "react-hot-toast"


const Google = () => {
  const { googleLogIn } = UseAuth();

  const handleGoogleLogIn = () => {
    googleLogIn()
      .then((result) => {
        const user = result.user;
        if (user) {
          toast.success(`Welcome, ${user.displayName || "User"}! Google Login successful.`);
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

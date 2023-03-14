import Navbar from "@/components/navbar"
import Signup from "@/components/signup"
import { signInWithPopup } from "firebase/auth"

const Register = () => {
  signInWithPopup
  return (
    <div className="">
      <Navbar />
      <div className="flex min-h-screen flex-col overflow-hidden tr">
        <div className="card card-side w-fit translate-y-28 self-center justify-self-center m-auto rounded-md flex flex-col text-secondary ">
          <div className="flex flex-col gap-7">
            <div className="text-4xl translate-x-10">Sign Up</div>
            <Signup />
            <div className="flex flex-col">
              <div className="self-center text-2xl">or</div>
              <div className="h-screen">
                <button className="btn border-secondary">Sign In With Google</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

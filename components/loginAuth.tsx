import { auth } from "@/firebase/firebaseClient"
import { signInWithEmailAndPassword } from "firebase/auth"
import { useState } from "react"
import Link from "next/link";

const LoginAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const submit = async () => {
    await signInWithEmailAndPassword(auth, email, password)
    .then((userCredntial) => {
      const user = userCredntial.user;
    })
    .catch((error) => {
      const errorCode = error.code
      const errorMessage = error.message
    })
  }

  return (
    <div className="form-control self-center flex flex-col w-screen md:w-fit">
      <div className="md:flex gap-5 self-center w-87 md:w-auto">
        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Your Email</span>
          </label>
          <input
          type='text'
          placeholder="info@site.com"
          className="input input-bordered input-secondary md:w-96"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}/>
        </div>
      </div>

      <div className="md:flex flex-col gap-5 self-center w-87 md:w-auto">
        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Your Password</span>
          </label>
          <input
          type='password'
          placeholder="Password"
          className="input input-bordered input-secondary md:w-96"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}/>
        <div className="self-start">
          <label className="label cursor-pointer gap-4">
            <input type="checkbox" className="checkbox"/>
            <span className="label-text">Remember me</span>
          </label>
        </div>
        </div>
      </div>
      <div className="self-center md:pl-5 my-3">Don't have an account yet? <Link href='/register' className="text-primary">Register here</Link>.</div>
      <button className="btn btn-primary w-80 mt-2 self-center text-white md:w-87" onClick={() => submit()}>Submit</button>
    </div>
  )
}

export default LoginAuth

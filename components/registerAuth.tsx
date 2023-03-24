import { auth, userCollections } from "@/firebase/firebaseClient"
import { createUserWithEmailAndPassword } from "firebase/auth"
import { addDoc } from "firebase/firestore";
import Link from "next/link";
import { useState } from "react"


const RegisterAuth = () => {
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [secondPassword, setSecondPassword] = useState("")
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")

  const submit = async () => {
    try{
      if(password === secondPassword){
        await createUserWithEmailAndPassword(auth, email, password)
        await addDoc(userCollections, {displayName: `${firstName} ${lastName}`, email})
      }
    }catch(error){
      console.log(error)
    }
  }

  return (
    <div className="form-control self-center flex flex-col w-screen md:w-fit">
      <div className="md:flex gap-5 self-center w-87 md:w-auto">
        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">First Name</span>
          </label>
          <input
          type='test'
          placeholder="FirstName"
          className="input input-bordered input-secondary md:w-80"
          onChange={(e) => setFirstName(e.target.value)}
          value={firstName}
          required
          />
        </div>

        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Last Name</span>
          </label>
          <input
          type="text"
          placeholder="LastName"
          className="input input-bordered input-secondary md:w-80"
          onChange={(e) => setLastName(e.target.value)}
          value={lastName}
          required
          />
        </div>
      </div>

      <div className="md:flex gap-5 self-center md:self-start w-87 md:w-auto">
        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Your Email *</span>
          </label>
          <input
          type='text'
          placeholder="info@site.com"
          className="input input-bordered input-secondary md:w-80"
          onChange={(e) => setEmail(e.target.value)}
          required
          value={email}/>
        </div>
      </div>

      <div className="md:flex gap-5 self-center w-87 md:w-auto">
        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Your Password *</span>
          </label>
          <input
          type='password'
          placeholder="Password"
          className="input input-bordered input-secondary md:w-80"
          onChange={(e) => setPassword(e.target.value)}
          required
          value={password}/>
        </div>

        <div className="flex flex-col px-2">
          <label className="label p-2">
            <span className="label-text">Confirm Password *</span>
          </label>
          <input
          type='password'
          placeholder="Confirm Password"
          className="input input-bordered input-secondary md:w-80 relative"
          onChange={(e) => setSecondPassword(e.target.value)}
          required
          value={secondPassword}/>
        </div>
      </div>
      <div className="self-center md:self-start md:pl-5 my-5">Already Have an Account? <Link href='/login' className="text-primary">Log in here</Link>.</div>
      <button className="btn btn-primary w-80 self-center my-5 text-white md:w-96" onClick={() => submit()}>Submit</button>
    </div>
  )
}

export default RegisterAuth

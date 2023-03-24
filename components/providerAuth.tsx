import { auth, googleProvider, userCollections } from "@/firebase/firebaseClient"
import { Google, Fingerprint } from "@mui/icons-material"
import { signInWithPopup, signInAnonymously} from "firebase/auth"
import { addDoc } from "firebase/firestore"
import { useRouter } from "next/router"

const ProviderAuth = () => {
  const { push } = useRouter()

  const signInWithGoogle = async() => {
    try {
      const result = await signInWithPopup(auth, googleProvider)
      if(result){
        const displayName = result.user.displayName
        const email = result.user.email
        await addDoc(userCollections, {displayName, email})
        push('/')
      }else {
        throw new Error
      }
    } catch (error){
      console.log(error)
    }
  }

  const signInAnon = async() => {
    try {
      const result = await signInAnonymously(auth)
      if(result){
        push('/')
      }else{
        throw new Error
      }
    } catch (error) {
      console.log(error)
    }
  }
  return (
    <div className="flex flex-col gap-9 w-87 self-center md:w-96 ">
      <div className="btn border-secondary bg-base-100 gap-3" onClick={() => signInWithGoogle()}>
        <Google/>
        <div>login with Google</div>
      </div>
      <div className="btn border-secondary bg-base-100 gap-3" onClick={() => signInAnon()}>
        <Fingerprint/>
        <div>login Anonymously</div>
      </div>
    </div>
  )
}

export default ProviderAuth

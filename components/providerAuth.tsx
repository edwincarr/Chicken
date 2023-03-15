import { Google, Fingerprint } from "@mui/icons-material"

const ProviderAuth = () => {
  return (
    <div className="flex flex-col gap-9 w-87 self-center md:w-96 ">
      <div className="btn border-secondary bg-base-100 gap-3" onClick={() => console.log()}>
        <Google/>
        <div>login with Google</div>
      </div>
      <div className="btn border-secondary bg-base-100 gap-3" onClick={() => console.log()}>
        <Fingerprint/>
        <div>login Anonymously</div>
      </div>
    </div>
  )
}

export default ProviderAuth

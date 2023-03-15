import ProviderAuth from "@/components/providerAuth"
import Navbar from "@/components/navbar"
import RegisterAuth from "@/components/registerAuth"

const Register = () => {
  return (
    <div>
      <Navbar />
      <div className="bg-blob bg-cover flex min-h-screen flex-col overflow-hidden">
        <div className="card card-side w-fit self-center justify-self-center m-auto rounded-md flex flex-col text-secondary mt-20">
          <div className="flex flex-col gap-7">
            <div className="text-4xl max-md:translate-x-10 text-black">Register</div>
              <RegisterAuth />
              <div className="flex flex-col">
                <ProviderAuth />
              </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Register

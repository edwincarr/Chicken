import LoginAuth from "@/components/loginAuth"
import Navbar from "@/components/navbar"
import ProviderAuth from "@/components/providerAuth"

const Login = () => {
  return (
    <div>
      <Navbar />

      <div className="bg-blob bg-cover flex min-h-screen flex-col overflow-hidden">
        <div className="card card-side w-fit self-center m-auto rounded-md text-secondary max-lg:mt-20">

          <div className="flex flex-col lg:flex-row gap-7">

            <div className="flex flex-col">
              <div className="text-4xl max-md:translate-x-10 text-black">Login</div>
              <LoginAuth />
            </div>

            <div className="flex flex-col lg:card-body lg:pb-26 justify-center lg:border-l-2 lg:border-base-200 lg:pl-9 max-lg:mb-20">
              <ProviderAuth />
            </div>

          </div>

        </div>
      </div>

    </div>
  )
}

export default Login

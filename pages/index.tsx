import Navbar from "@/components/navbar"
import wing from '../public/chicken.png'
import wing2 from '../public/chicken-2.png'
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'
import Footer from "@/components/footer";

const jose = Josefin_Sans({
  weight: ['700'],
  subsets:['latin']
})

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-blob bg-cover aspect-16/9 pt-36 overflow-visible">
        <div className="flex flex-row-reverse justify-end self-center max-md:flex-col lg:gap-20 px-p-15">
          <div className={`text-7xl md:text-8xl w-72 ${jose.className}`}>"Winner Winner Chicken Dinner"</div>
          <div>
            <Image src={wing} alt='wing' className="-translate-y-10 w-64"/>
          </div>
        </div>

        <div className="flex justify-end max-md:flex-col lg:gap-20 mb-20 lg:pr-28 max-md:justify-start px-p-15">
          <div className={`text-7xl md:text-8xl w-96 ${jose.className}`}>"Come Try Our Award Winning Chicken"</div>
          <div className="min-w-100">
            <Image src={wing2} alt='wing' className="md:translate-y-20"/>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

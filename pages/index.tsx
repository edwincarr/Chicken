import Navbar from "@/components/navbar"
import wing from '../public/chicken.png'
import wing2 from '../public/chicken-2.png'
import Image from "next/image";
import { Josefin_Sans } from 'next/font/google'

const jose = Josefin_Sans({
  weight: ['700'],
  subsets:['latin']
})

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-blob bg-cover min-h-screen aspect-16/9 flex-col pt-36 overflow-visible" >
        <div className="flex flex-row-reverse justify-end self-center max-md:flex-col lg:justify-center lg:gap-20">
          <div className={`max-md:pl-4 text-8xl w-72 ${jose.className}`}>Winner Winner Chicken Dinner</div>
          <div className="w-80 ">
            <Image src={wing} alt='wing' className="-translate-y-10"/>
          </div>
        </div>

        <div className="flex justify-start self-center max-md:flex-col lg:justify-center lg:gap-20 mb-20">
          <div className={`max-md:pl-4 text-8xl w-96 ${jose.className}`}>Come Try Our Award Winning Chicken</div>
          <div className="w-80">
            <Image src={wing2} alt='wing' className="translate-y-20"/>
          </div>
        </div>
      </div>
        <div className="h-screen">hi</div>
    </div>
  )
}

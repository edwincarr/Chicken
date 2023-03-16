import Navbar from "@/components/navbar"
import wing from '../public/chicken.png'
import wing2 from '../public/chicken-2.png'
import Image from "next/image";

export default function Home() {
  return (
    <div>
      <Navbar />
      <div className="bg-blob bg-cover w-screen aspect-16/9">
        <div className="pt-44">
          <Image src={wing} alt='chicken wing' className="h-auto w-auto max-h-80 rotate-90"/>
          {/* <Image src={wing2} alt='chicken wing' className="h-auto w-auto max-h-96"/> */}
        </div>
      </div>
        <div className="h-screen"></div>
    </div>
  )
}

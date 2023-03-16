import Navbar from "@/components/navbar"
import wing from '../public/chicken.png'
import wing2 from '../public/chicken-2.png'
import Image from "next/image";
import { useState } from "react";

export default function Home() {
  const [loaded, setLoaded] = useState(false)
  loaded
  return (
    <div onLoad={() => setLoaded(true)}>
      <Navbar />
      <div className="bg-blob bg-cover min-h-screen aspect-16/9 pt-16" >
        <div className="flex md:justify-center self-center max-md:flex-col gap-96">
          <div className="max-md:pl-20 text-8xl w-72">Winner Winner Chicken Dinner</div>
          <div className="w-80 ">
            <Image src={wing} alt='wing' className=""/>
          </div>
        </div>
      </div>
    </div>
  )
}

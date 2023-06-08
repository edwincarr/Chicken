import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import useMenuStore from "@/components/store/menuStore"
import Image from "next/image"
import { useEffect } from "react"

const Menu = () => {
  const menu = useMenuStore((state) => state.menu)
  const loadMenu = useMenuStore((state) => state.loadMenu)
  const clearMenu = useMenuStore((state) => state.clearMenu)

  useEffect(() => {
    loadMenu()
    return () => {
      clearMenu()
    }
  },[loadMenu, clearMenu])

  return (
    <div>
      <Navbar />
      <div className=" py-20 flex gap-10 flex-wrap justify-center">
        {
        menu.map((item,idx) => {
          return (
            <div key={idx} className="p-10 bg-neutral h-80 w-80 rounded-lg">
              <h1 className="text-xl font-medium">{item.name}</h1>
              <Image src={`https://www.wingstop.com/assets/images/flavors/spice-level-${item.spice}.png`} alt={item.spice} width={100} height={0}/>
              <p>{item.description}</p>
            </div>
          )
        })
      }
      </div>
      <Footer />
    </div>
  )
}

export default Menu

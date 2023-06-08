import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import useMenuStore from "@/components/store/menuStore"
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
            <div key={idx} className="p-10 bg-hover h-80 w-80 rounded-lg shadow-2xl">
              <h1>{item.name}</h1>
              <h2>{item.spice}</h2>
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

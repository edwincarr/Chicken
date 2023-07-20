import Image from "next/image"
import { useEffect } from "react"
import Footer from "@/components/footer"
import Navbar from "@/components/navbar"
import useMenuStore from "@/components/store/menuStore"
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import AddToCart from "@/components/addToCart"

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
      <div className="p-20 flex gap-10 flex-wrap justify-center">
        {
        menu.map((item,idx) => {
          return (
            <div key={idx} className="p-10 bg-stone-700 h-87 w-80 rounded-lg">
              <div className="flex">
                <h1 className="text-xl font-medium text-white pb-3 w-full">{item.name}</h1>
                <AddToCart />
              </div>
              <div className="flex justify-center pb-2 gap-5">
                <Image src={`https://www.wingstop.com/assets/images/flavors/spice-level-${item.spice}.png`} alt={item.spice} width={100} height={0}/>
              </div>
              <p className="text-white">{item.description}</p>
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

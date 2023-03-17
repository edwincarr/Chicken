import Footer from "@/components/footer"
import Map from "@/components/map"
import Navbar from "@/components/navbar"

const Locations = () => {
  return (
    <div>
      <Navbar />
      <div className="flex">
      <div className="h-full w-1/2">
        <Map />
      </div>
        <div>
          
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Locations

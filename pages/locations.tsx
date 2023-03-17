import Footer from "@/components/footer"
import Map from "@/components/map"
import Navbar from "@/components/navbar"
import useLocationStore from "@/components/store/locationStore"
import { useEffect } from "react"

const Locations = () => {
  const locations = useLocationStore((state) => state.locations)
  const loadLocations = useLocationStore((state) => state.loadLocations)
  const clearLocations = useLocationStore((state) => state.clearLocations)

  useEffect(() => {
    loadLocations()
    return () => {
      clearLocations()
    }
  },[])

  return (
    <div className="overflow-hidden">
      <Navbar />
      <div className="flex w-screen overflow-hidden">
        <div className="w-1/2 -translate-x-full transition-all duration-500 lg:translate-x-0">
          <Map />
        </div>
        <div className="flex flex-col gap-3 z-10 w-full max-lg:absolute overflow-y-auto h-screen pt-20 px-10 pb-10">
          {
            locations.map((location,idx) => {
              return (
                <div key={idx} className="bg-base-100 rounded-lg border border-secondary p-10 flex w-full">
                  <div>
                    <div className="text-2xl">{location.address}</div>
                    <div>Latitude: {location.coordinates.lat}, Longitude: {location.coordinates.lng}</div>
                  </div>
                  <div className="btn btn-ghost bg-primary text-neutral ml-auto">Order</div>
                </div>
              )
            })
          }
        </div>
      </div>
    </div>

  )
}

export default Locations

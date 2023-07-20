import Map from "@/components/map"
import Navbar from "@/components/navbar"
import useLocationStore from "@/components/store/locationStore"
import Link from "next/link"
import test from "node:test"
import { useEffect } from "react"

const Locations = () => {
  const locations = useLocationStore((state) => state.locations)
  const loadLocations = useLocationStore((state) => state.loadLocations)
  const clearLocations = useLocationStore((state) => state.clearLocations)
  const setLocation = useLocationStore((state) => state.setLocation)
  const orderLocation = useLocationStore((state) => state.orderLocation)

  useEffect(() => {
    loadLocations()
    return () => {
      clearLocations()
    }
  },[loadLocations, clearLocations])

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
                <div key={idx} className="bg-stone-700 rounded-lg p-10 flex w-full">
                  <div>
                    <div className="text-2xl text-white">{location.address}</div>
                    <div className="text-white">Latitude: {location.coordinates.lat}, Longitude: {location.coordinates.lng}</div>
                  </div>
                  <div className="btn btn-ghost bg-primary text-white ml-auto font-bold" onClick={() => setLocation(location)}><Link href='/menu'>Order</Link></div>
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

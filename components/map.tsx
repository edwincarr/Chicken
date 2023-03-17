import { useLoadScript, GoogleMap, MarkerF } from "@react-google-maps/api"
import { useEffect } from "react";
import useLocationStore from "./store/locationStore";

const containerStyle = {
  width: '50%',
  height: '100%'
};

const center = {
  lat: 0,
  lng: 0
}

const Map = () => {
  const locationLoad = useLocationStore((state) => state.loadLocations)
  const locations = useLocationStore((state) => state.locations)
  const clearLocations = useLocationStore((state) => state.clearLocations)
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
  })

  useEffect(() => {
    locationLoad()

    return () => {
      clearLocations()
    }

  },[])

  return isLoaded ? (
    <div className='h-screen w-screen'>
      <GoogleMap center={center} zoom={2} mapContainerStyle={containerStyle} mapTypeId="satellite" options={{disableDefaultUI:true, zoomControl:false}}>
        {
          locations.map((location) => {
            return (
              <MarkerF position={location.coordinates} />
            )
          })
        }
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map

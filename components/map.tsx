import { useLoadScript, GoogleMap, Marker, MarkerF } from "@react-google-maps/api"
import { useState } from "react";

const containerStyle = {
  width: '50%',
  height: '100%'
};

const locations = {
  center: { lat: 0, lng: 0 },
  antarctica: { lat: -70, lng: -64 },
  everest: { lat: 27.9881, lng: 86.9250 },
  bermudaTri: { lat: 25, lng: -71 },
  outback: { lat: -25, lng: 130 },
  norway: { lat: 76, lng: 64 },
  easter: { lat: -27.1, lng: -109.36}
}

const Map = () => {
  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_KEY as string
  })

  return isLoaded ? (
    <div className='h-screen w-screen'>
      <GoogleMap center={locations.center} zoom={2} mapContainerStyle={containerStyle} mapTypeId="satellite" options={{disableDefaultUI:true, zoomControl:false}}>
        <MarkerF position={locations.outback} />
        <MarkerF position={locations.everest} />
        <MarkerF position={locations.bermudaTri} />
        <MarkerF position={locations.antarctica} />
        <MarkerF position={locations.norway} />
        <MarkerF position={locations.easter} />
      </GoogleMap>
    </div>
  ) : <></>
}

export default Map

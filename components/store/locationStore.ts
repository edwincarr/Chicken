import { locationCollections } from "@/firebase/firebaseClient";
import { getDocs } from "firebase/firestore";
import { create } from "zustand";

interface location {
  address: string,
  coordinates: {lat:number, lng:number}
}

interface LocationStore {
  locations: Array<location>,
  loadLocations: () => void,
  clearLocations: () => void
}

const useLocationStore = create<LocationStore>((set) => ({
  locations: [],
  loadLocations: async () => {
    const response = await getDocs(locationCollections)
    set({ locations: response.docs.map((doc) => ({...doc.data()})) })
  },
  clearLocations: () => set({ locations: []})
}))

export default useLocationStore

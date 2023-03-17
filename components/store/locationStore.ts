import { locationCollections } from "@/firebase/firebaseClient";
import { DocumentData, getDocs } from "firebase/firestore";
import { create } from "zustand";

interface LocationStore {
  locations: Array<DocumentData>,
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

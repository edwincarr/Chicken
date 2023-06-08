import { menuCollections } from "@/firebase/firebaseClient";
import { DocumentData, getDocs } from "firebase/firestore";
import { create } from "zustand";

interface MenuStore {
  menu: Array<DocumentData>,
  loadMenu: () => void,
  clearMenu: () => void
}

const useMenuStore = create<MenuStore>((set) => ({
  menu: [],
  loadMenu: async () => {
    const response = await getDocs(menuCollections)
    set({ menu: response.docs.map((doc) => ({...doc.data()})) })
  },
  clearMenu: () => set({ menu: []})
}))

export default useMenuStore

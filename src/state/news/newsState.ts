import { create } from "zustand";

const useNewsStore = create((set) => ({
  news: [],
  setNews: () => set((state) => ({ news: state })),
}));

export default useNewsStore;

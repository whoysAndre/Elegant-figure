import { create } from 'zustand'

interface MyStoreState{
  filters: {
    brand: string,
    categorySelected: string
  };
};

interface MyStoreActions {
  setFilters: (newObject: Partial<MyStoreState['filters']>) => void;
}



export const useProductsStore = create<MyStoreState & MyStoreActions>()((set) => ({
  //States
  
  filters: {brand: "all",categorySelected:"all"},

  //Actions
  setFilters: (newObject) => set((state)=>({
    filters: {...state.filters,...newObject}
  }))
  
}));
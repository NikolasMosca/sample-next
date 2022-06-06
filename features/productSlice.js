import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  list: [],
  categories: [],
  alreadyLoaded: false
}

export const productSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action) => {
      state.list = action.payload

      state.categories = Object.values(action.payload.reduce((previous, current) => {
        //controllo se dentro il mio accumulatore ho già quella categoria 
        if(!previous[current.category_id]) {
          previous[current.category_id] = {
            id: current.category_id,
            name: current.category_name,
            image: current.category_image,
            description: current.category_description,
            public: current.category_public,
          }
        }
        return previous;
      }, {}))

      state.alreadyLoaded = true
    },
  },
})

// Action creators are generated for each case reducer function
export const { setProducts } = productSlice.actions

// Selectors 
export const selectProducts = (state) => state.products.list
export const selectCategories = (state) => state.products.categories
export const selectPublicCategories = (state) => state.products.categories.filter(item => item.public)
export const selectProductsAlreadyLoaded = (state) => state.products.alreadyLoaded

export default productSlice.reducer
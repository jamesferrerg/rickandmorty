import { configureStore } from '@reduxjs/toolkit'
import { rickandmortySlice } from './slices/rickandmorty'

export const store = configureStore({
  reducer: {
    genre: rickandmortySlice.reducer
  },
})
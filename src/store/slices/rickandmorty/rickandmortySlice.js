import { createSlice } from '@reduxjs/toolkit'

export const rickandmortySlice = createSlice({
  name: 'rickandmorty',
  initialState: {
    rickandmorty: 'Tv show'
  },
  reducers: {
    genre: (state) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.rickandmorty = 'Animated sitcom'
    },
  },
})

// Action creators are generated for each case reducer function
export const { genre } = rickandmortySlice.actions
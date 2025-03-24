import { createSlice } from '@reduxjs/toolkit'

export const rickandmortySlice = createSlice({
  name: 'rickandmorty',
  initialState: {
    characterId: '',
    characters: [],
    isLoading: false
  },
  reducers: {
    startLoadingCharacters: (state) => {
        state.isLoading = true;
    },
    setMainCharacters: (state, action) => {
        state.isLoading = false;
        state.characterId = action.payload.characterId;
        state.characters = action.payload.characters;
    }
  },
})

// Action creators are generated for each case reducer function
export const { startLoadingCharacters, setMainCharacters } = rickandmortySlice.actions
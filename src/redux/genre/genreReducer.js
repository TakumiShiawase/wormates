import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  selectedGenre: '',
};

const genreSlice = createSlice({
  name: 'genre',
  initialState,
  reducers: {
    selectGenre: (state, action) => {
      state.selectedGenre = action.payload;
    },
  },
});

export const { selectGenre } = genreSlice.actions;
export default genreSlice.reducer;

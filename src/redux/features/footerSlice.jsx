import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    currentSongIndex: 0,
  };

const footerSlice = createSlice({
  name: "footer",
  initialState,
  reducers: {
    updateCurrentSongIndex: (state, action) => {
      state.currentSongIndex = action.payload;
    },
  },
});

export default footerSlice.reducer;
export const { updateCurrentSongIndex } = footerSlice.actions;

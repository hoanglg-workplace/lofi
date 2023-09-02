import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  rain: false,
  rainValue: 0,
  volumeValue: 50,
  moodMode: "chill",
};

const footerSlice = createSlice({
  name: "home",
  initialState,
  reducers: {
    updateRain: (state, action) => {
      state.rain = action.payload;
    },
    updateRainValue: (state, action) => {
      state.rainValue = action.payload;
    },
    updateVolumeValue: (state, action) => {
      state.volumeValue = action.payload;
    },
    updateMoodMode: (state, action) => {
      state.moodMode = action.payload;
    },
  },
});

export default footerSlice.reducer;
export const { updateRain, updateRainValue, updateVolumeValue, updateMoodMode } = footerSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  openMood: false,
  cityTraffic: 0,
  fireplace: 0,
  snow: 0,
  summerStorm: 0,
  fan: 0,
  forestNight: 0,
  wave: 0,
  wind: 0,
  people: 0,
  river: 0,
  rainForest: 0,
};

const modifierBoardSlice = createSlice({
  name: "modifierBoard",
  initialState,
  reducers: {
    updateOpenMood: (state, action) => {
      state.openMood = action.payload;
    },
    updateCityTraffic: (state, action) => {
      state.cityTraffic = action.payload;
    },
    updateFireplace: (state, action) => {
      state.fireplace = action.payload;
    },
    updateSnow: (state, action) => {
      state.snow = action.payload;
    },
    updateSummerStorm: (state, action) => {
      state.summerStorm = action.payload;
    },
    updateFan: (state, action) => {
      state.fan = action.payload;
    },
    updateForestNight: (state, action) => {
      state.forestNight = action.payload;
    },
    updateWave: (state, action) => {
      state.wave = action.payload;
    },
    updateWind: (state, action) => {
      state.wind = action.payload;
    },
    updatePeople: (state, action) => {
      state.people = action.payload;
    },
    updateRiver: (state, action) => {
      state.river = action.payload;
    },
    updateRainForest: (state, action) => {
      state.rainForest = action.payload;
    },
  },
});

export default modifierBoardSlice.reducer;
export const {
  updateOpenMood,
  updateCityTraffic,
  updateFireplace,
  updateSnow,
  updateSummerStorm,
  updateFan,
  updateForestNight,
  updateWave,
  updateWind,
  updatePeople,
  updateRiver,
  updateRainForest,
} = modifierBoardSlice.actions;

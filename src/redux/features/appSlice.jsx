import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    darkLightSwitch: false,
  };

const appSlice = createSlice({
  name: "app",
  initialState,
  reducers: {
    updateDarkLightSwitch: (state, action) => {
      state.darkLightSwitch = action.payload;
    },
  },
});

export default appSlice.reducer;
export const { updateDarkLightSwitch } = appSlice.actions;

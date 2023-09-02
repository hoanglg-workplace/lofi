import { configureStore } from "@reduxjs/toolkit";
import HomeReducer from '../redux/features/homeSlice'
import ModifierBoardReducer from '../redux/features/modifierBoardSlice'
import FooterReducer from '../redux/features/footerSlice'
import AppReducer from '../redux/features/appSlice'

const store = configureStore({
  reducer: {
    app: AppReducer,
    home: HomeReducer,
    modifierBoard: ModifierBoardReducer,
    footer: FooterReducer,
  },
});

export default store;

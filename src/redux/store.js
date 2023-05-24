import { configureStore } from "@reduxjs/toolkit";
import userSlice from "./userSlice";
import categorySlice from "./categorySlice";

const store = configureStore({
  reducer: {
    userState: userSlice,
    categoryState: categorySlice,
  },
});
export default store;

import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/loginSlice";
import { filterSlice } from "./slice/filterSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    filter: filterSlice.reducer,
  },
});

export default store;

import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/loginSlice";
import { filterSlice } from "./slice/filterSlice";
import { collapsedSlice } from "./slice/collapsedSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    filter: filterSlice.reducer,
    collapsed: collapsedSlice.reducer,
  },
});

export default store;

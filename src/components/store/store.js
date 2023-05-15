import { configureStore } from "@reduxjs/toolkit";
import { loginSlice } from "./slice/loginSlice";
import { filterSlice } from "./slice/filterSlice";
import { collapsedSlice } from "./slice/collapsedSlice";
import { formSlice } from "./slice/formSlice";

const store = configureStore({
  reducer: {
    login: loginSlice.reducer,
    filter: filterSlice.reducer,
    collapsed: collapsedSlice.reducer,
    form: formSlice.reducer,
  },
});

export default store;

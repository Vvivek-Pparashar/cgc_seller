import { createSlice } from "@reduxjs/toolkit";

const loginSlice = createSlice({
  name: "login",
  initialState: {
    value: false,
  },
  reducers: {
    setLogin(state, action) {
      state.value = action.payload;
    },

    setLogOut(state, action) {
      state.value = action.payload;
    },
  },
});

export { loginSlice };
export const { setLogOut, setLogin } = loginSlice.actions;

import { createSlice } from "@reduxjs/toolkit";

const collapsedSlice = createSlice({
  name: "collapsed",
  initialState: {
    navbar: false,
    sider: false,
  },

  reducers: {
    changeNavbarState(state, action) {
      state.navbar = action.payload;
    },

    changeSiderState(state, action) {
      state.sider = action.payload;
    },
  },
});

export { collapsedSlice };
export const { changeNavbarState, changeSiderState } = collapsedSlice.actions;

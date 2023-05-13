import { createSlice } from "@reduxjs/toolkit";

const filterSlice = createSlice({
  name: "filter",
  initialState: {
    value: "All",
  },

  reducers: {
    changeFilter(state, action) {
      state.value = action.payload;

    },
  },
});

export { filterSlice };
export const { changeFilter } = filterSlice.actions;

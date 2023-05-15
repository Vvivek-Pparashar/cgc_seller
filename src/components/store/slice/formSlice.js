import { createSlice } from "@reduxjs/toolkit";

const formSlice = createSlice({
  name: "form",
  initialState: {
    title: "",
    price: "",
    category: "",
    name: "",
    phoneNo: "",
    email: localStorage.getItem("email"),
    img: "",
  },

  reducers: {
    cngTitle(state, action) {
      state.title = action.payload;
    },
    cngPrice(state, action) {
      state.price = +action.payload;
    },
    cngCategory(state, action) {
      state.category = action.payload;
    },
    cngName(state, action) {
      state.name = action.payload;
    },
    cngPhoneNo(state, action) {
      state.phoneNo = action.payload;
    },
    cngImg(state, action) {
      state.img = action.payload;
    },

    cngEmail(state, action) {
      state.email = localStorage.getItem("email");
    },
  },
});

export { formSlice };

export const { cngCategory, cngImg, cngName, cngPhoneNo, cngPrice, cngTitle, cngEmail } =
  formSlice.actions;

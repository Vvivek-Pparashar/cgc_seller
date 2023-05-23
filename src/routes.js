import React from "react";
import App from "./App";
import ItemContainer from "./components/singleItem/ItemContainer";
import { createBrowserRouter } from "react-router-dom";
import AddItem from "./components/addItem/AddItem";
import YourItem from "./components/yourItem/YourItem";
import SingleYourItem from "./components/yourItem/SingleYourItem/SingleYourItem/SingleYourItem";
import AboutUs from "./components/aboutus/AboutUs";
import Faqs from "./components/faq's/Faqs";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Vivekisgr8</h1>,
  },

  {
    path: "/item/:id",
    element: <ItemContainer />,
  },

  {
    path: "/addItem",
    element: <AddItem />,
  },

  {
    path: "/yourItem",
    element: <YourItem />,
  },

  {
    path: "/yourItem/:id",
    element: <SingleYourItem />,
  },
  {
    path: "/aboutUs",
    element: <AboutUs />,
  },

  {
    path: "/faq's",
    element: <Faqs />,
  },
]);

export default router;

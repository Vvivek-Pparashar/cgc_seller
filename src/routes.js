import React from "react";
import App from "./App";
import ItemContainer from "./components/ItemContainer";
import { createBrowserRouter } from "react-router-dom";
import AddItem from "./components/AddItem";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <h1>Vivekisgr8</h1>,
  },

  {
    path: "/:id",
    element: <ItemContainer />,
  },

  {
    path: "/addItem",
    element: <AddItem />,
  },
]);

export default router;

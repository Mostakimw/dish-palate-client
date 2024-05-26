import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import AddRecipe from "../pages/AddRecipe/AddRecipe";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
    ],
  },
]);

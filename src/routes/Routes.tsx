import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Homepage from "../pages/Homepage/Homepage";
import AddRecipe from "../pages/AddRecipe/AddRecipe";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import Recipes from "../pages/Recipes/Recipes";
import RecipeDetails from "../pages/RecipeDetails/RecipeDetails";
import Coin from "../pages/Coin/Coin";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,

    children: [
      {
        index: true,
        element: <Homepage />,
      },
      {
        path: "add-recipe",
        element: <AddRecipe />,
      },
      {
        path: "recipes",
        element: <Recipes />,
      },
      {
        path: "recipe/:id",
        element: <RecipeDetails />,
      },
      {
        path: "purchase-coin",
        element: <Coin />,
      },
    ],
  },
]);

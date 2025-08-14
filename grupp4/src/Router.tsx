import { createBrowserRouter } from "react-router";
import { Layout } from "./pages/Layout";
import { Home } from "./pages/Home";
import { Recipe } from "./pages/Recipe";

export const Router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/recipe/:id",
        element: <Recipe />,
      },
    ],
  },
]);

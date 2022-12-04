import React from "react";
import "./styles/app.scss";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Pokemon from "./pages/Pokemon";
import { AppRoutes } from "./routes";

const router = createBrowserRouter([
  {
    path: AppRoutes.HOME,
    element: <Home />,
  },
  {
    path: AppRoutes.POKEMON,
    element: <Pokemon />,
  },
]);

const App = () => {
  return <RouterProvider router={router} />;
};

export default App;

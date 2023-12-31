import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./Pages/Home/404/NotFound.tsx";
import { NavBar } from "./components/NavBar/NavBar.tsx";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail.tsx";
import { Login } from "./Pages/Login/Login.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <App />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: (
      <>
        <NavBar />
        <div>este es la pagina del / - home </div>
      </>
    ),
    errorElement: <NotFound />,
  },
  {
    path: "/login",
    element: <Login />,
    errorElement: <NotFound />,
  },
  {
    path: "/dashboard/:id",
    element: <PokemonDetail />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import { NotFound } from "./Pages/Home/404/NotFound.tsx";
import { PokemonDetail } from "./components/PokemonDetail/PokemonDetail.tsx";
import { Login } from "./Pages/Login/Login.tsx";
import { Register } from "./Pages/Register/Register.tsx";
import { Dashboard } from "./Pages/Dashboard/Dashboard.tsx";
import { Home } from "./Pages/Home/Home.tsx";

const router = createBrowserRouter([
  {
    path: "/dashboard",
    element: <Dashboard />,
    errorElement: <NotFound />,
  },
  {
    path: "/",
    element: <Home />,
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
  {
    path: "/register",
    element: <Register />,
    errorElement: <NotFound />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <>
    <RouterProvider router={router} />
  </>
);

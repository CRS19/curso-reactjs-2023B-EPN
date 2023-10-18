import { Link } from "react-router-dom";
import { IAppState, useAppStore } from "../../Storage/Storage";

export const NavBar = () => {
  const { loading } = useAppStore((state: IAppState) => state);

  return (
    <nav>
      {!loading ? (
        <ul>
          <li>
            <Link to={"/dashboard"}>Dashboard</Link>
          </li>
          <li>
            <Link to={"/login"}>login</Link>
          </li>
          <li>
            <Link to={"/register"}>registro</Link>
          </li>
          <li>
            <Link to={"/"}>home</Link>
          </li>
        </ul>
      ) : (
        <div> Tambien esta cargandoooo!</div>
      )}
    </nav>
  );
};

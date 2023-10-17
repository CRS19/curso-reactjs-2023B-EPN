import { Link } from "react-router-dom";

export const NavBar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to={"/dashboard"}>Dashboard</Link>
        </li>
        <li>
          <Link to={"/login"}>login</Link>
        </li>
        <li>
          <Link to={"/"}>home</Link>
        </li>
      </ul>
    </nav>
  );
};

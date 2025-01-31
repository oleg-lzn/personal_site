import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { routes } from "../../../utils/routes";

function NavBar({ menu, toggleMenu }) {
  const customClassName = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link";

  return (
    <nav className="nav">
      <NavLink to={routes.aboutme} className={customClassName}>
        {" "}
        About Me{" "}
      </NavLink>
      <NavLink to={routes.resume} className={customClassName}>
        {" "}
        Resume{" "}
      </NavLink>
      <NavLink to={routes.projects} className={customClassName}>
        {" "}
        Projects{" "}
      </NavLink>
      <NavLink to={routes.contact} className={customClassName}>
        {" "}
        Contact{" "}
      </NavLink>
    </nav>
  );
}

export default NavBar;

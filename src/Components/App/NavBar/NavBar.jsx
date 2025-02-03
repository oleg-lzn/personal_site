import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { routes } from "../../../utils/routes";

function NavBar({ toggleMenu, setCloseButton }) {
  const customClassName = ({ isActive }) =>
    isActive ? "nav__link nav__link_active" : "nav__link";

  function toggleButtonAndGo() {
    toggleMenu();
    setCloseButton();
  }

  return (
    <nav className="nav">
      <NavLink
        to={routes.aboutme}
        className={customClassName}
        onClick={toggleButtonAndGo}
      >
        {" "}
        About Me{" "}
      </NavLink>
      <NavLink
        to={routes.resume}
        className={customClassName}
        onClick={toggleButtonAndGo}
      >
        {" "}
        Resume{" "}
      </NavLink>
      <NavLink
        to={routes.projects}
        className={customClassName}
        onClick={toggleButtonAndGo}
      >
        {" "}
        Projects{" "}
      </NavLink>
      <NavLink
        to={routes.contact}
        className={customClassName}
        onClick={toggleButtonAndGo}
      >
        {" "}
        Contact{" "}
      </NavLink>
    </nav>
  );
}

export default NavBar;

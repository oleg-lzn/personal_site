import "./Header.css";
import NavBar from "../NavBar/NavBar";

function Header({ props }) {
  return (
    <div className="header">
      <button className="header__icon-button"> Here will be Icon</button>
      <NavBar />
    </div>
  );
}

export default Header;

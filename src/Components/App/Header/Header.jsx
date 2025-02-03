import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";

function Header({ setMobile }) {
  return (
    <header className="header">
      <Logo />
      <NavBar />
    </header>
  );
}

export default Header;

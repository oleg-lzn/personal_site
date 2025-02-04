import "./Header.css";
import NavBar from "../NavBar/NavBar";
import Logo from "../Logo/Logo";
import { useState } from "react";
import BurgerMenu from "../Burger/BurgerMenu";

function Header({ isMobile }) {
  const [mobileMenu, openMobileMenu] = useState(false);
  const [burgerButton, setCloseButton] = useState(false);

  function toggleMenu() {
    openMobileMenu((prev) => !prev);
  }

  return (
    <header className="header">
      <Logo />
      {isMobile && (
        <BurgerMenu
          onClick={toggleMenu}
          burgerButton={burgerButton}
          setCloseButton={setCloseButton}
        />
      )}
      {mobileMenu && (
        <div className={`header__mobile-menu ${mobileMenu ? "open" : ""}`}>
          <NavBar toggleMenu={toggleMenu} setCloseButton={setCloseButton} />
        </div>
      )}
      {!isMobile && <NavBar />}
    </header>
  );
}

export default Header;

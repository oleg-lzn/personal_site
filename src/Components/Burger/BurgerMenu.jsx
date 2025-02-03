import { useState } from "react";
import "./BurgerMenu.css";

function BurgerMenu({ onClick, burgerButton, setCloseButton }) {
  const toggleMenu = () => {
    setCloseButton((burgerButton) => !burgerButton);
    onClick();
  };

  return (
    <button
      className={`burger-menu ${burgerButton ? "open" : ""}`}
      onClick={toggleMenu}
    >
      <div className="bar top"></div>
      <div className="bar middle"></div>
      <div className="bar bottom"></div>
    </button>
  );
}

export default BurgerMenu;

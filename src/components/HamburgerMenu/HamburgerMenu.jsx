import React from "react";
import "./style.css";

export const HamburgerMenu = ({ open, pressButton }) => {
  return (
    <button
      className={open ? "hamburger hamburger--open" : "hamburger"}
      // aria-label="menu"
      onClick={pressButton}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
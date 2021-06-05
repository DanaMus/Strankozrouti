import React from "react";
import "./style.css";

export const HamburgerMenu = ({ open, naKliknutiNaTlacitko }) => {
  return (
    <button
      className={open ? "hamburger hamburger--open" : "hamburger"}
      // aria-label="menu"
      onClick={naKliknutiNaTlacitko}
    >
      <span></span>
      <span></span>
      <span></span>
    </button>
  );
};
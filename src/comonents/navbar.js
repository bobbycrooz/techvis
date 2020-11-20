import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";
import MobileMenu from "./mobileMenu";

const Navbar = () => {
  useEffect(() => {}, []);

  return (
    <div className="navbar__wrapper">
      <div className="navbar__main">
        <div className="navbar__logo">
          <a href="#">techvis</a>
        </div>
        <div className="nav">
          <div className="nav__item">
            <a href="#">schedule</a>
          </div>
          <div className="nav__item">
            <a href="#">judges</a>
          </div>
          <div className="nav__item">
            <a href="#">gallery</a>
          </div>
          <div className="nav__item">
            <a href="#">sponsors</a>
          </div>
          <div className="nav__item">
            <a href="#">contact</a>
          </div>
        </div>
        <Hamburger
          onToggle={(toggle) => {
            let m__menu = document.querySelector(".m__menu");
            if (toggle) {
              m__menu.style.display = "block";
            } else {
              m__menu.style.display = "none";
            }
          }}
        />
      </div>
      <MobileMenu />
    </div>
  );
};

export default Navbar;

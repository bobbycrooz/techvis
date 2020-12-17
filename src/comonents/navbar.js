import React, { useState, useEffect } from "react";
import { Squash as Hamburger } from "hamburger-react";

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
      <div className="m__menu" id="mobileMenu">
        <ul className="menu__list">
          <li className="menu__item">
            <a href="#" className="menu__item_link">
              schedule
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__item_link">
              jurdge
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__item_link">
              gallery
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__item_link">
              sponsor
            </a>
          </li>
          <li className="menu__item">
            <a href="#" className="menu__item_link">
              contact
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;

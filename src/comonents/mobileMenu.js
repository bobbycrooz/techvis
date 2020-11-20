import React from "react";

const MobileMenu = (props) => {
  return (
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
  );
};

export default MobileMenu;

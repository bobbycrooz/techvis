import React, { useState, useEffect } from "react";

const Header = () => {
  const [scrollPosition, setScrollPosition] = useState();

  return (
    <div className="header__wrapper">
      <div className="header_info">
        <h4 className="header_info-motion">
          TECHVIS: Building Future With Digital Immersion hyd
          <h1>{scrollPosition}</h1>
        </h4>
        <h1 className="header_info-theme">DESIGN THINKING CONFERENCE</h1>
        <div className="header_info-btn">
          <a href="#">
            <button className="techvis-btn btn-apply">submit entries</button>
          </a>
          <a href="#">
            <button className="techvis-btn btn-proposal">event proposal</button>
          </a>
        </div>
      </div>
    </div>
  );
};

export default Header;

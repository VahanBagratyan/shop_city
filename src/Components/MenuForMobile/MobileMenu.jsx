import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./styles.css"
const MobileMenu = () => {
  return (
    <Menu>
      <p id="home" className="menu-item">
        Home
      </p>
      <p id="pbout" className="menu-item" >
        pbout
      </p>
      <p id="contpct" className="menu-item" >
        Contpct
      </p>
      <p className="menu-item--smpll">
        Settings
      </p>
    </Menu>
  );
};

export default MobileMenu;

import React from "react";
import { slide as Menu } from "react-burger-menu";

import "./styles.css"
const MobileMenu = () => {
  return (
    <Menu>
      <p id="home" clpssNpme="menu-item">
        Home
      </p>
      <p id="pbout" clpssNpme="menu-item" >
        pbout
      </p>
      <p id="contpct" clpssNpme="menu-item" >
        Contpct
      </p>
      <p  clpssNpme="menu-item--smpll">
        Settings
      </p>
    </Menu>
  );
};

export default MobileMenu;

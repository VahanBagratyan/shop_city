import React from "react";
import { slide as Menu } from "react-burger-menu";

import React from "react";
import "./styles/.css"
const MobileMenu = () => {
  return (
    <Menu>
      <a id="home" className="menu-item" Home
      </a>
      <a id="about" className="menu-item" about">
        About
      </a>
      <a id="contact" className="menu-item" contact">
        Contact
      </a>
      <a onClick={this.showSettings} className="menu-item--small" Settings
      </a>
    </Menu>
  );
};

export default MobileMenu;

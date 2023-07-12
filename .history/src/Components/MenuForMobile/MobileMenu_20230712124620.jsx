import React from "react";
import { slide as Menu } from "react-burger-menu";

import React from "react";
import "./styles/.css"
const MobileMenu = () => {
  return (
    <Menu>
      <a id="home" className="menu-item">
        Home
      </a>
      <a id="about" className="menu-item" href="/about">
        About
      </a>
      <a id="contact" className="menu-item" href="/contact">
        Contact
      </a>
      <a onClick={this.showSettings} className="menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default MobileMenu;

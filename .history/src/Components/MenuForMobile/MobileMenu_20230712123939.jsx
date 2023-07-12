import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.module.css"

const MobileMenu = () => {
  return (
    <Menu>
      <a id="home" className=styles.styles.menu-item} href="/">
        Home
      </a>
      <a id="about" className=styles.menu-item" href="/about">
        About
      </a>
      <a id="contact" className={styles.menu-item} href="/contact">
        Contact
      </a>
      <a className=styles.menu-item--small" href="">
        Settings
      </a>
    </Menu>
  );
};

export default MobileMenu;

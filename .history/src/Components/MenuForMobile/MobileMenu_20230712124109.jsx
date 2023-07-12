import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.module.css";

const MobileMenu = () => {
  return (
    <Menu>
      <a className={styles.styles.menuItem}>Home</a>
      <a className={styles.menuItem}>About</a>
      <a className={styles.menuItem}>Contact</a>
      <a className={styles.menuItemSmall}>Settings</a>
    </Menu>
  );
};

export default MobileMenu;

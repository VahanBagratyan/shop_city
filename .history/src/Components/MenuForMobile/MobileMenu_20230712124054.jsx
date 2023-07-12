import React from "react";
import { slide as Menu } from "react-burger-menu";
import styles from "./styles.module.css";

const MobileMenu = () => {
  return (
    <Menu>
      <a className={styles.styles.menu - item}>Home</a>
      <a className={styles.menu - item}>About</a>
      <a className={styles.menu - item}>Contact</a>
      <a className={styles.menuItem - small}>Settings</a>
    </Menu>
  );
};

export default MobileMenu;

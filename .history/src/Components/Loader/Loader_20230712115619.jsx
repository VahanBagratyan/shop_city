import React from "react";
import styles from "./anomation.module.css";

const Loader = () => {
  return (
    <div className={styles.content}>
      <div className={styles.fade}></div>
      <div className={styles.modal}>
        <img className="loader" src="https://image.ibb.co/d8SYZ8/loading.gif" />
      </div>
    </div>
  );
};

export default Loader;

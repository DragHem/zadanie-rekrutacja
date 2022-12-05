import React from "react";

import styles from "./Button.module.scss";

const Button: React.FC<{
  children: React.ReactNode;
  bgColor: string;
  onClickHandler?: () => void;
}> = ({ children, bgColor, onClickHandler }) => {
  return (
    <button
      style={{ backgroundColor: bgColor }}
      className={styles.btn}
      onClick={onClickHandler}
    >
      {children}
    </button>
  );
};

export default Button;

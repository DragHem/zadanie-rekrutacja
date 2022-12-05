import React from "react";

import styles from "./Form.module.scss";

const Form: React.FC<{
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  children: React.ReactNode;
}> = ({ onSubmit, children }) => {
  return (
    <form onSubmit={onSubmit} className={styles["form-group"]}>
      {children}
    </form>
  );
};

export default Form;

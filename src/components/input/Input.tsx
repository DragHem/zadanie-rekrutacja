import React, { useEffect } from "react";

import styles from "./Input.module.scss";
import useInput from "../../hooks/useInput";

const Input: React.FC<{
  type: string;
  labelText: string;
  errorText?: string;
  validateFunction?: (value: string) => boolean;
  formStateHandler: React.Dispatch<
    React.SetStateAction<{
      login: string;
      password: string;
      email: string;
      phoneNumber: string;
    }>
  >;
  id: "login" | "password" | "email" | "phoneNumber";
}> = ({
  type,
  labelText,
  errorText,
  validateFunction,
  formStateHandler,
  id,
}) => {
  const { isValid, value, valueChangeHandler, inputBLurHandler, hasError } =
    useInput(validateFunction ?? null);

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (isValid && value) {
        formStateHandler((prevState) => {
          return { ...prevState, [id]: value };
        });
      }
    }, 300);

    return () => clearTimeout(timeoutId);
  }, [value, isValid, formStateHandler, id]);

  return (
    <label className={styles["input-control"]}>
      {labelText}
      <input
        className={`${hasError ? styles["error"] : ""} ${styles["text-input"]}`}
        type={type}
        value={value}
        onChange={valueChangeHandler}
        onBlur={inputBLurHandler}
      />
      {hasError && <span className={styles["error-text"]}>{errorText}</span>}
    </label>
  );
};

export default Input;

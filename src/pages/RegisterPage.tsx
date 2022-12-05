import React, { useState } from "react";
import Form from "../components/form/Form";
import Wrapper from "../components/ui/wrapper/Wrapper";
import Input from "../components/input/Input";
import Button from "../components/ui/button/Button";
import styles from "../components/input/Input.module.scss";
import { useLocation } from "react-router-dom";

const validateEmail = (value: string): boolean => value.trim().includes("@");
const validatePhoneNumber = (value: string): boolean =>
  value.trim().length === 9;

const RegisterPage = () => {
  const [checkboxErr, setCheckboxErr] = useState(false);
  const [formState, setFormState] = useState({
    login: "",
    password: "",
    email: "",
    phoneNumber: "",
  });
  const [statute, setStatute] = useState(false);

  const { state } = useLocation();

  const submitHandler = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { login, email, password, phoneNumber } = formState;

    if (!statute) {
      setCheckboxErr((prevState) => !prevState);
    }

    if (login && statute && email && password && phoneNumber) {
      fetch("https://example/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ ...formState, star_wars_data: state }),
      });
      setCheckboxErr(false);
    }
  };

  return (
    <Wrapper>
      <Form onSubmit={submitHandler}>
        <h2>Formularz rejestracyjny</h2>

        <Input
          type="text"
          labelText="Login:"
          formStateHandler={setFormState}
          id="login"
        />

        <Input
          type="password"
          labelText="Hasło:"
          formStateHandler={setFormState}
          id="password"
        />

        <Input
          type="email"
          labelText="E-mail:"
          errorText="Nieprawidłowy format adresu e-mail"
          validateFunction={validateEmail}
          formStateHandler={setFormState}
          id="email"
        />

        <Input
          type="tel"
          labelText="Numer telefonu:"
          errorText="Nieprawidłowy numer telefonu"
          validateFunction={validatePhoneNumber}
          formStateHandler={setFormState}
          id="phoneNumber"
        />

        <label className={styles.left}>
          <input
            type="checkbox"
            className={checkboxErr ? styles["error"] : ""}
            onChange={() => {
              setStatute((prevState) => !prevState);
              setCheckboxErr(false);
            }}
          />
          <div>
            <p> Akceptuję Regulamin</p>
            <p>{checkboxErr && <span>Wymagana akceptacja regulaminu</span>}</p>
          </div>
        </label>

        <Button bgColor="#071594">zapisz</Button>
      </Form>
    </Wrapper>
  );
};

export default RegisterPage;

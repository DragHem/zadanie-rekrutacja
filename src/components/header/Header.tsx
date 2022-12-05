import React from "react";
import styles from "./Header.module.scss";
import Button from "../ui/button/Button";
import { Link } from "react-router-dom";
import { sendData } from "../../pages/HeroPage";

const Header: React.FC<{ state: sendData[] }> = ({ state }) => {
  return (
    <header className={styles["main-header"]}>
      <p>Damian Puś</p>
      <Link to="/register" state={state}>
        <Button bgColor="#40483A">formularz rejestracyjny</Button>
      </Link>
    </header>
  );
};

export default Header;

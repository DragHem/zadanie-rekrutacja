import React from "react";

import styles from "./Hero.module.scss";

import Wrapper from "../ui/wrapper/Wrapper";
import { State } from "../../hooks/useFetch";
import FriendIcon from "../ui/icons/FriendIcon";
import TickIcon from "../ui/icons/TickIcon";

const Hero: React.FC<{
  counter: number;
  data: State[];
  error: Boolean;
  isPending: Boolean;
}> = ({ counter, data, error, isPending }) => {
  if (error)
    return (
      <Wrapper>
        <h3>Something gone wrong...</h3>
      </Wrapper>
    );

  if (isPending)
    return (
      <Wrapper>
        <h3>Loading...</h3>
      </Wrapper>
    );

  const { name, eye_color, birth_year } = data[data.length - 1];

  return (
    <div className={styles.hero}>
      <img src={`https://picsum.photos/534/383?random=${counter}`} alt="Hero" />

      <div className={styles["hero-description"]}>
        <header className={styles["hero-header"]}>
          <h2>{name}</h2>
          <div>
            <FriendIcon />
            <TickIcon />
          </div>
        </header>

        <p>age: {birth_year}</p>
        <p>eye color: {eye_color}</p>
      </div>
    </div>
  );
};

export default Hero;

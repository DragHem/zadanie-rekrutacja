import React, { useState } from "react";
import Wrapper from "../components/ui/wrapper/Wrapper";
import Button from "../components/ui/button/Button";
import Hero from "../components/hero/Hero";
import Header from "../components/header/Header";
import useFetch from "../hooks/useFetch";

export type sendData = {
  name: string;
  created: string;
  vehicles: string[];
};

const HeroPage = () => {
  const [counter, setCounter] = useState<number>(1);

  const loadedPersons = useFetch(
    `https://swapi.py4e.com/api/people/${counter}/`
  );

  const dataToSend: sendData[] = loadedPersons.data.map(
    ({ name, created, vehicles }) => ({
      name,
      created,
      vehicles,
    })
  );

  const handleClick = (): void => {
    setCounter((prevState) => prevState + 1);
  };

  return (
    <Wrapper>
      <Header state={dataToSend} />
      <Hero counter={counter} {...loadedPersons} />
      <Button bgColor="#35660E" onClickHandler={handleClick}>
        next profiles
      </Button>
    </Wrapper>
  );
};

export default HeroPage;

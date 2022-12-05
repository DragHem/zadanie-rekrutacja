import { ChangeEvent, useState } from "react";

type ValidateFunction = ((value: string) => boolean) | null;

const useInput = (validator: ValidateFunction) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);

  let valueIsValid;

  if (validator) {
    valueIsValid = validator(enteredValue);
  } else {
    valueIsValid = true;
  }

  const hasError = !valueIsValid && isTouched;

  const valueChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
    setEnteredValue(e.target.value);
  };

  const inputBLurHandler = () => {
    setIsTouched(true);
  };

  return {
    value: enteredValue,
    isValid: valueIsValid,
    hasError,
    valueChangeHandler,
    inputBLurHandler,
  };
};

export default useInput;

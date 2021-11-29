import { useState, useMemo } from "react";

const useInput = (conditionFunction) => {
  const [value, setValue] = useState("");
  const [isTouched, setIsTouched] = useState(false);
  const isValid = useMemo(() => {
    if(typeof conditionFunction === 'function'){
      return conditionFunction(value);
    }
    return true;
  }, [value, conditionFunction]);
  const inputChangeHandler = (event) => {
    setValue(event.target.value);
  };
  const inputIsTouchHandler = () => {
    setIsTouched(true);
  };
  const resetInputHandler = () => {
    setValue("");
    setIsTouched(false);
  };

  return {
    inputChangeHandler: inputChangeHandler,
    inputIsTouchHandler: inputIsTouchHandler,
    resetInputHandler: resetInputHandler,
    value: value,
    isValid: isValid,
    isTouched: isTouched,
  };
};

export default useInput;

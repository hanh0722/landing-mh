import { Input as InputComponenet } from "../../container";
import useInput from "../../../hook/use-input";
import { forwardRef } from "react";
/* eslint-disable react/display-name */
const Input = forwardRef(({ checkValidate, className, error, inputDefine }, ref) => {
  const {isValid, isTouched, inputChangeHandler, inputIsTouchHandler, value } = useInput(checkValidate)
  return <InputComponenet className={className} ref={ref} error={!isValid && isTouched && error} input={{
      ...inputDefine,
      value: value,
      onChange: inputChangeHandler,
      onBlur: inputIsTouchHandler,
  }}/>;
});

export default Input;

import { Input } from "..";
import { forwardRef } from "react";
import useInput from "../../../hook/use-input";
/* eslint-disable react/display-name */

const InputValidate = forwardRef(({ cb, className, error, input }, ref) => {
  const { isValid, isTouched, value, inputChangeHandler, inputIsTouchHandler } =
    useInput((value) => cb(value));
  return (
    <Input
      ref={ref}
      input={{
        ...input,
        onChange: inputChangeHandler,
        onBlur: inputIsTouchHandler,
        value: value
      }}
      className={className}
      error={error}
    />
  );
});
export default InputValidate;

import React from "react";
import styles from "./FormEmail.module.scss";
import { Input, Button } from "../../container";
import useInput from "../../../hook/use-input";
const FormEmail = () => {
  const { isValid, inputChangeHandler, inputIsTouchHandler, value, isTouched } =
    useInput((value) => value.trim().length > 0 && value.includes("@"));
  return (
    <form className={styles.container}>
      <h6>Nhận thông báo việc làm</h6>
      <p>Nhận thông báo về Email khi có việc làm mới.</p>
      <Input className={styles.input} input={{
          onChange: inputChangeHandler,
          onBlur: inputIsTouchHandler,
          value: value,
          type: 'email',
          required: true,
          autoComplete: 'off',
          placeholder: 'Nhập địa chỉ Email'
      }}/>
      <Button>Tạo thông báo</Button>
    </form>
  );
};

export default FormEmail;

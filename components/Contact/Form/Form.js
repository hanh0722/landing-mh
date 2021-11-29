import React, { useRef } from "react";
import { Grid, Button, TextArea } from "../../container";
import Image from "next/image";
import styles from "./Form.module.scss";
import Link from "next/link";
import Input from "../Input/Input";
import { ValidateLengthInput } from "../../../util";
import useMedia from "../../../hook/use-media";
const renderInput = [
  {
    validateInput: (value) => Boolean(ValidateLengthInput(value)),
    input: {
      type: "text",
      autoComplete: "off",
      placeholder: "Tên",
      required: true
    },
    error: "Tên không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value),
    input: {
      type: "text",
      autoComplete: "off",
      placeholder: "Địa chỉ",
      required: true,
    },
    error: "Địa chỉ không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value),
    input: {
      type: "number",
      autoComplete: "off",
      placeholder: "Số điện thoại",
      minLength: "1",
      maxLength: "11",
      required: true,
    },
    error: "Số điện thoại không được để trống",
  },
  {
    validateInput: (value) => ValidateLengthInput(value) && value.includes("@"),
    input: {
      type: "email",
      autoComplete: "off",
      placeholder: "Email",
      required: true,
    },
    error: "Email không hợp lệ",
  },
];
const Form = ({ contact }) => {
  const matchMobile = useMedia("(max-width: 768px)");
  const icon = [
    "/home-dark-icon.svg",
    "/email-icon.svg",
    "/phone-side-icon.svg",
  ];
  const nameRef = useRef();
  const addressRef = useRef();
  const phoneRef = useRef();
  const emailRef = useRef();
  const contentRef = useRef();
  const totalRef = [nameRef, addressRef, phoneRef, emailRef, contentRef];
  return (
    <Grid className={styles.grid}>
      <div className={styles.information}>
        <h5>Thông tin liên hệ</h5>
        <ul>
          {Object.values(contact).map((content, index) => {
            return (
              <li className="d-flex align-items-center" key={index}>
                <Image
                  src={icon[index]}
                  alt=""
                  width={matchMobile ? "16px" : "23px"}
                  height={matchMobile ? "16px" : "23px"}
                />
                <span>{content}</span>
              </li>
            );
          })}
        </ul>
      </div>
      <form className={styles.form}>
        {renderInput.map((input, index) => {
          return <Input ref={totalRef[index]} className={styles.input} key={index} {...input}  />;
        })}
        <TextArea
          textarea={{
            rows: "4",
            placeholder: "Nội dung",
          }}
          className={`w-100 ${styles.text}`}
        />
        <div className={styles.button}>
          <Button>Gửi nội dung</Button>
        </div>
      </form>
    </Grid>
  );
};

export default Form;

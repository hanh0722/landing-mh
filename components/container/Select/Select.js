import React, { useState } from "react";
import styles from "./Select.module.scss";
import Image from "next/image";

const Select = ({
  children,
  className,
  listValue,
  setValueByFn,
  firstTitle,
}) => {
  const [valueField, setValueField] = useState(null);
  const [isBlur, setIsBlur] = useState(false);
  const [isFocus, setIsFocus] = useState(false);
  const setValueHandler = (value) => {
    setValueField(value);
    if (typeof setValueByFn === "function") {
      setValueByFn(value);
    }
    setIsBlur(true);
    setIsFocus(false);
  };
  const changeBlurHandler = () => {
    setIsBlur(true);
    setIsFocus(false);
  };
  const changeFocusHandler = () => {
    setIsFocus(true);
    setIsBlur(false);
  };
  return (
    <div
      tabIndex={0}
      onFocus={changeFocusHandler}
      onBlur={changeBlurHandler}
      className={`${styles.select} d-flex justify-content-between align-items-center ${className}`}
    >
      {valueField ? valueField.toUpperCase() : firstTitle}
      <Image src="/arrow-down-icon.svg" width="10px" height="13px" alt="" />
      {listValue && (
        <ul
          style={{ height: isFocus && !isBlur ? `${30 * listValue.length + 60}px` : `0px` }}
          className={` ${styles.list} ${isFocus && !isBlur ? "" : styles.hidden}`}
        >
          {listValue.map((list, index) => (
            <li onClick={() => setValueHandler(list)} key={index}>
              {list}
            </li>
          ))}
          {children}
        </ul>
      )}
    </div>
  );
};

export default Select;

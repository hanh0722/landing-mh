import React, { forwardRef } from "react";
import styles from "./TextArea.module.scss";
/* eslint-disable react/display-name */
const TextArea = forwardRef((props, ref) => {
  return (
    <textarea
      ref={ref}
      className={`${styles["text-area"]} ${props.className}`}
      {...props.textarea}
    />
  );
});

export default TextArea;

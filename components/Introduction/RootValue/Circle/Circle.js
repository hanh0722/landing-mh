import React from "react";
import styles from "./Circle.module.scss";
const Circle = (props) => {
  return (
    <div
      {...props}
      className={`d-flex justify-content-center align-items-center rounded-circle position-relative ${styles.circle}`}
    >
      {props.children}
    </div>
  );
};

export default Circle;

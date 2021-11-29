import React from "react";
import styles from "./Loading.module.scss";
const Loading = ({ className }) => {
  return (
    <div className={`${styles["lds-ellipsis"]} ${className}`}>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default Loading;

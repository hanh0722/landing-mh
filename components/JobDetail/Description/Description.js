import React from "react";
import { StringToHTML } from "../../container";
import styles from "../styles.module.scss";
const Description = ({ description, title }) => {
  return (
    <div className={styles.description}>
      <h3>Mô tả công việc</h3>
      <StringToHTML string={description} />
    </div>
  );
};

export default Description;

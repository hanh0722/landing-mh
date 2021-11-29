import React from "react";
import { StringToHTML } from "../container";
import styles from "./DetailBlog.module.scss";
const DetailBlog = ({ data }) => {
  return (
    <div className={styles.content}>
      <StringToHTML string={data} />
    </div>
  );
};

export default DetailBlog;

import React from "react";
import styles from "../styles.module.scss";
import { Image } from "../../container";
const Share = () => {
  return (
    <div className={styles.share}>
      <h4>Chia sẻ công việc này</h4>
      <div className={`d-flex align-items-center ${styles.line}`}>
        <span>
          <Image
            src="/facebook-square-icon.svg"
            alt=""
            width="36px"
            height="36px"
          />
        </span>
        <span>
          <Image src="/linkedln-white.svg" width="20px" height="20px" alt="" />
        </span>
      </div>
    </div>
  );
};

export default Share;

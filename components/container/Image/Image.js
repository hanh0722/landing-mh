import React, { useState } from "react";
import styles from "./Image.module.scss";
const Image = ({ src, className, imageConfig }) => {
  const [srcImage, setSrcImage] = useState(src);
  // const changeImageIfError = () => {
  //   setSrcImage(`/fallback_temp.png`)
  // }
  return (
    <div className={`${styles.image} ${className}`}>
      <img src={src} alt={srcImage} loading="lazy" {...imageConfig} />
    </div>
  );
};

export default Image;

import React from "react";
import styles from "./Line.module.scss";
import { LayoutContainer, Image } from "../../container";
const Line = ({ title, className, src, mainTitle, classText, aosImage, iconImage }) => {
  return (
    <LayoutContainer className={styles["container-line"]}>
      <div
        className={`d-flex justify-content-between align-items-center position-relative ${styles.container} ${className}`}
      >
        <div
          data-aos="fade-up"
          data-aos-delay={500}
          className={`${styles.text} ${classText}`}
        >
          <h5>{mainTitle}</h5>
          <Image src={iconImage ? iconImage : "/icon.png"} alt="" />
          {title}
        </div>
        <div data-aos={aosImage || 'fade-right'} data-aos-delay={750} className={`position-relative ${styles.image}`}>
          <Image src={src} alt="" />
        </div>
      </div>
    </LayoutContainer>
  );
};

export default Line;

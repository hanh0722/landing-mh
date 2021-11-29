import React from "react";
import styles from '../../Introduction/Line/Line.module.scss';
import { LayoutContainer, Image } from '..';
import useMedia from "../../../hook/use-media";
const TextImage = ({ title, className, src, mainTitle, classText, aosImage, iconImage, aos, classImage, classNameContainer }) => {
  const matchMobile = useMedia('(max-width: 768px)');
  return (
    <LayoutContainer className={`${styles["container-line"]} ${classNameContainer}`}>
      <div
        className={`d-flex justify-content-between align-items-center position-relative ${styles.container} ${className}`}
      >
        <div data-aos={aosImage || 'fade-right'} data-aos-delay={0} className={`position-relative ${styles.image} ${classImage}`}>
          <Image src={src} alt="" />
        </div>
        <div
          data-aos={aos ? aos : "fade-up"}
          data-aos-delay={750}
          className={`${styles.text} ${classText}`}
        >
          <h5>{mainTitle}</h5>
          {iconImage && !matchMobile && <Image src={iconImage} alt="" />}
          <p className={styles['title-item']}>{title}</p>
        </div>
      </div>
    </LayoutContainer>
  );
};

export default TextImage;

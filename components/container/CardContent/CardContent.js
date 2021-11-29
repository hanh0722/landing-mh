import React from "react";
import styles from "./CardContent.module.scss";
import Image from "next/image";
import { Line } from "..";
import useMedia from "../../../hook/use-media";
// import useHover from "../../../hook/use-hover";
const CardContent = ({
  iconSrc,
  iconWidth,
  title,
  lineClassName,
  content,
  className,
  classImage,
  colorLine,
  options,
  iconChangeInHover,
}) => {
  const mobile = useMedia('(max-width: 991px)');
  // const { isHover, isHoverHandler, isNotHoverHandler } = useHover(false);
  return (
    <div
      // onMouseEnter={isHoverHandler}
      // onMouseLeave={isNotHoverHandler}
      className={`${styles.card} ${className}`}
      {...options}
    >
      <div
        className={`d-flex justify-content-center align-items-center ${
          styles.image
        } ${classImage}`}
      >
        <Image
          src={iconSrc}
          alt=""
          width={!mobile ? (iconWidth || "32px") : (iconWidth || "28px")}
          height={!mobile ? "38px" : "28px"}
        />
      </div>
      <p className={styles.title}>{title}</p>
      <Line
        className={`${styles.line} ${lineClassName}`}
        style={{ background: colorLine || "black" }}
      />
      <p className={styles.content}>{content}</p>
    </div>
  );
};

export default CardContent;

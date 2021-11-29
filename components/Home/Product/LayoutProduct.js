import React from "react";
import { Image } from "../../container";
import Link from "next/link";
import styles from "./LayoutProduct.module.scss";
import Icon from "./Icon/Icon";
import { Line, Button } from "../../container";
const LayoutProduct = ({
  children,
  title,
  content,
  className,
  src,
  path,
  aos,
  tabletView,
  iconSrc,
  srcSet,
}) => {
  return (
    <div
      data-aos={aos}
      className={`${styles.layout} ${className} position-relative`}
    >
      <div>
        <div className="d-flex flex-column align-items-between align-items-center justify-content-between text-center">
          <Icon src={iconSrc} />
          <h4>{title}</h4>
        </div>
        <div className={`position-relative ${styles.image}`}>
          {src && (
            <Image
              src={src || "/demo-image.png"}
              alt=""
              className={styles.image}
            />
          )}
        </div>
      </div>
      <div
        className={`d-flex flex-column align-items-center justify-content-center ${styles["show--container"]}`}
      >
        <Icon
          className={styles.color}
          src={srcSet || "/project_icon_white.svg"}
        />
        <h4 data-transition-delay="500">{title}</h4>
        <Line
          style={{ width: tabletView ? "96px" : "150px" }}
          className={styles.line}
        />
        <p
          className={`${styles.content} text-center`}
          data-transition-delay="1000"
        >
          {content}
        </p>
        <Link data-transition-delay="1500" href={path || "/"} passHref={true}>
          {/* just temporary for not being error, dynamic route */}
          <a>
            <Button className={styles.button}>Tìm hiểu thêm</Button>
          </a>
        </Link>
      </div>
      {children}
    </div>
  );
};

export default LayoutProduct;

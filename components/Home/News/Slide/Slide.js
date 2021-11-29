import React from "react";
import Link from "next/link";
import styles from "./Slide.module.scss";
import { Image } from "../../../container";
const Slide = ({ src, className, children, type, title, id, contentClassName }) => {
  return (
    <div className={`${styles.slide} ${className}`}>
      <Link href={`/news/${id}`} passHref={true}>
        <a>
          <Image src={src} alt={src || ""} />
        </a>
      </Link>
      <div className={`${styles.content} ${contentClassName}`}>
        <span>{type}</span>
        <p>
          <Link href={`/news/${id}`}>{title}</Link>
          {/* temporary link */}
        </p>
        {children}
      </div>
    </div>
  );
};

export default Slide;

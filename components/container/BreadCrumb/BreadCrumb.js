import React from "react";
import styles from "./BreadCrumb.module.scss";
import Image from "next/image";
import Link from "next/link";
const BreadCrumb = ({ date, paths, className, isMobile }) => {
  return (
    <>
      <div
        className={`${styles["bread-crumb"]} d-flex justify-content-between align-items-center ${className}`}
      >
        <ul>
          {paths &&
            paths.map((path, index) => {
              return (
                <Link href={"/"} key={index}>
                  <a>
                    <li className={path.color ? styles.color : ""}>
                      {path.name}{" "}
                      {index !== paths.length - 1 && (
                        <span>
                          <Image
                            src={"/arrow-bread-crumb-icon.svg"}
                            alt=""
                            width="6px"
                            height="10px"
                          />
                        </span>
                      )}
                    </li>
                  </a>
                </Link>
              );
            })}
        </ul>
        {date && !isMobile && (
          <div className={`d-flex align-items-center ${styles.date}`}>
            <span>{date}</span>
          </div>
        )}
      </div>
      {date && isMobile && <p className={styles.date}>{date}</p>}
    </>
  );
};

export default BreadCrumb;

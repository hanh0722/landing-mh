import React from "react";
import styles from "./Position.module.scss";
import Image from "next/image";
import Link from "next/link";
import Type from "./Type/Type";
import { useRouter } from "next/router";

const Position = ({ url, title, date, place, salary, types, id, isMobile }) => {
  const router = useRouter();
  return (
    <div className={`${styles.container}`}>
      <div
        className={`d-flex justify-content-between ${styles.wrap} align-items-center`}
      >
        <div className={`position-relative ${styles.image}`}>
          {url && (
            <Image
              src={url}
              alt=""
              width="100%"
              height="auto"
              layout="responsive"
            />
          )}
        </div>
        <div className={styles.content}>
          <div
            className={`d-flex justify-content-between align-items-center flex-wrap`}
          >
            <Link href={`${router.pathname}/${id}`} passHref={true}>
              <a>
                <h5>{title}</h5>
              </a>
            </Link>
            <div className={styles.date}>
              <span>Mới</span>
              <span>{date}</span>
            </div>
          </div>
          <div className={`d-flex align-items-center ${styles.places}`}>
            <div className="d-flex align-items-center">
              <svg
                width="14"
                height="18"
                viewBox="0 0 14 18"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M7.79292 16.8564C10.8419 14.8861 13.6663 11.4091 13.6663 7.1475C13.6663 3.56787 10.6816 0.666016 6.99967 0.666016C3.31778 0.666016 0.333008 3.56787 0.333008 7.1475C0.333008 11.4091 3.15746 14.8861 6.20643 16.8564C6.99967 17.369 6.99967 17.369 7.79292 16.8564ZM6.99967 10.666C8.84062 10.666 10.333 9.17363 10.333 7.33268C10.333 5.49173 8.84062 3.99935 6.99967 3.99935C5.15872 3.99935 3.66634 5.49173 3.66634 7.33268C3.66634 9.17363 5.15872 10.666 6.99967 10.666Z"
                  fill="#1D1D1D"
                />
              </svg>

              <span className={styles.place}>{place}</span>
            </div>
            <div className="d-flex align-items-center">
              <svg
                width="9"
                height="16"
                viewBox="0 0 9 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M4.83424 7.08333C2.94258 6.59167 2.33424 6.08333 2.33424 5.29167C2.33424 4.38333 3.17591 3.75 4.58424 3.75C6.06758 3.75 6.61758 4.45833 6.66758 5.5H8.50924C8.45091 4.06667 7.57591 2.75 5.83424 2.325V0.5H3.33424V2.3C1.71758 2.65 0.417578 3.7 0.417578 5.30833C0.417578 7.23333 2.00924 8.19167 4.33424 8.75C6.41758 9.25 6.83424 9.98333 6.83424 10.7583C6.83424 11.3333 6.42591 12.25 4.58424 12.25C2.86758 12.25 2.19258 11.4833 2.10091 10.5H0.267578C0.367578 12.325 1.73424 13.35 3.33424 13.6917V15.5H5.83424V13.7083C7.45924 13.4 8.75091 12.4583 8.75091 10.75C8.75091 8.38333 6.72591 7.575 4.83424 7.08333Z"
                  fill="#1D1D1D"
                />
              </svg>

              <span className={styles.text}>{salary}</span>
            </div>
          </div>
          <div className={`d-flex align-items-center ${styles.flex}`}>
            {types &&
              !isMobile &&
              types.map((type, index) => {
                return (
                  <Type className={styles["work-type"]} key={index}>
                    {type}
                  </Type>
                );
              })}
          </div>
        </div>
      </div>
      <div className={`d-flex align-items-center ${styles.flex}`}>
        {types &&
          isMobile &&
          types.map((type, index) => {
            return (
              <Type className={styles["work-type"]} key={index}>
                {type}
              </Type>
            );
          })}
      </div>
    </div>
  );
};

export default Position;

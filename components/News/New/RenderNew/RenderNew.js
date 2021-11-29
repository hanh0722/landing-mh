import React from "react";
import styles from "./RenderNew.module.scss";
import Image from "next/dist/client/image";
import Link from "next/link";
import { removeUnicode } from "../../../../util";
import { useDispatch } from "react-redux";
import { categoryActions } from "../../../../store/slices/category-slice";
const RenderNew = ({ name, date, type, url_cover, image, category_id, id, className, routeClassName }) => {
  const dispatch = useDispatch();
  return (
    <div className={`${styles.new} ${className}`}>
      <div className={`position-relative ${styles.image}`}>
        <Link passHref={true} href={`/news/${id}`}>
          <a>
          <Image
            src={url_cover}
            layout="responsive"
            alt=""
            width="297px"
            height="166px"
            objectFit="cover"
            {...image}
          />
          </a>
        </Link>
      </div>
      <div
        className={`d-flex justify-content-between align-items-center ${styles.time} ${routeClassName}`}
      >
        <h6 onClick={() => dispatch(categoryActions.changeCategoryHandler(category_id))}>{type}</h6>
        <p>{date}</p>
      </div>
      <Link className={styles.link} href={`/news/${id}`}>
        {name}
      </Link>
    </div>
  );
};

export default RenderNew;

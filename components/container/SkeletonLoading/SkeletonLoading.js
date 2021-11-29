import React from "react";
import styles from "./SkeletonLoading.module.scss";

const SkeletonLoading = ({ src, classContainer, times, imageClassName, containerSkeleton }) => {
    const _renderSkeleton = (number) => {
        const array = [];
        for(let i = 0; i < number; i++){
            array.push(<div key={i} className={`${styles.skeleton} ${styles.line}`}></div>)
        }
        return array;
    }
  return (
    <div className={`${styles.loading} ${classContainer}`}>
      {src && <div className={`${styles.image} ${styles.skeleton} ${imageClassName}`}></div>}
      <div className={`${styles['container-text']} ${containerSkeleton}`}>
        {times && <div className={styles.lines}>{_renderSkeleton(+times)}</div>}
      </div>
    </div>
  );
};

export default SkeletonLoading;

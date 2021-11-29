import React from "react";
import Circle from "../Circle/Circle";
import styles from '../RootValue.module.scss';
const CircleContainer = ({title, length, index, shadow, backgroundColor}) => {
  return (
    <div
      style={{
        transform: `rotate(${Math.round(360 / length) * index}deg)`,
      }}
      className={styles["circle-element"]}
    >
      <div
        style={{
          transform: `rotate(-${Math.round(360 /length) * index}deg)`,
        }}
        className={`d-flex justify-content-center align-items-center flex-column ${styles.element}`}
      >
        <Circle
          style={{
            background: backgroundColor,
            boxShadow: `${shadow}`,
          }}
        >
          {index + 1}
        </Circle>
        <span className={styles.text}>{title}</span>
      </div>
    </div>
  );
};

export default CircleContainer;
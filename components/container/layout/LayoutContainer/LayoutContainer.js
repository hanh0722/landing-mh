import React from "react";
import Container from "../Container";
import styles from "./LayoutContainer.module.scss";

const LayoutContainer = (props) => {
  return (
    <Container {...props} className={`${styles.container} ${props.className}`}>
      {props.children}
    </Container>
  );
};

export default LayoutContainer;

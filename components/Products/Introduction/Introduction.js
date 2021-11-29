import React from "react";
import { ContainerSmall, Grid, Image } from "../../container";
import styles from "./Introduction.module.scss";
const Introduction = ({ title, children, className, src, imageConfig, aos, childrenClassName }) => {
  return (
    <ContainerSmall className={styles['container-grid']}>
      {title && <h4>{title}</h4>}
      <Grid className={`${styles.grid} ${className}`}>
        {src && <Image imageConfig={{...imageConfig}} src={src} alt="" />}
        <div className={`${styles.content} ${childrenClassName}`} data-aos={aos ? aos : ''}>
          {children}
        </div>
      </Grid>
    </ContainerSmall>
  );
};

export default Introduction;

import React from "react";
import { LayoutContainer } from "..";
import styles from './ContainerSmall.module.scss';
const ContainerSmall = ({children, className}) => {
    return(
        <LayoutContainer className={`${styles.container} ${className}`}>
            {children}
        </LayoutContainer>
    )
}

export default ContainerSmall;
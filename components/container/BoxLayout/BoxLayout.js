import React from "react";
import { Container } from "..";
import styles from './BoxLayout.module.scss';
const BoxLayout = ({children, className}) => {
    return(
        <Container className={`${styles.container} ${className}`}>
            {children}
        </Container>
    )
}

export default BoxLayout;
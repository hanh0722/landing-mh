import React from "react";
import styles from './Button.module.scss';

const Button = (props) => {
    return(
        <button className={`${styles.button} ${props.className}`} {...props.options}>{props.children}</button>
    )
}

export default Button;
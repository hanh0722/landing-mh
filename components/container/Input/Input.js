import React, { forwardRef } from "react";
import styles from "./Input.module.scss";
import { CSSTransition } from "react-transition-group";
/* eslint-disable react/display-name */
const Input = forwardRef(({ input, className, children, error }, ref) => {
    return(
        <div className={`${styles.input} ${className}`}>
            <input ref={ref} {...input} className={error ? styles['input-error'] : ''}/>
            <CSSTransition in={!!error} unmountOnExit mountOnEnter timeout={0}>
                <p className={styles.error}>{error}</p>
             </CSSTransition>   
            {children}
        </div>
    )
});

export default Input;

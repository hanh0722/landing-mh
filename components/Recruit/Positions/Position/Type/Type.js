import React from "react";
import styles from './Type.module.scss';
const Type = ({children, className}) => {
    return(
        <div className={`${styles.type} ${className}`}>
            {children}
        </div>
    )
}

export default Type;
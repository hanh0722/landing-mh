import React from 'react';
import styles from './ContainerBanner.module.scss';
const ContainerBanner = (props) => {
    return(
        <div {...props} className={`${styles.container} ${props.className}`}>
            {props.children}
        </div>
    )
}

export default ContainerBanner;
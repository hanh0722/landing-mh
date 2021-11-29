import React from "react";
import styles from '../styles.module.scss';
import { StringToHTML } from "../../container";
const Requiredment = ({requirement, title}) => {
    return(
        <div className={styles.requiredment}>
            <h3>{title}</h3>
            <StringToHTML string={requirement}/>
        </div>
    )
}

export default Requiredment;
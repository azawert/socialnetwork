import React from "react";
import styles from '../friends.module.css'
const Friend = (props) => {
    return (
        <div className={styles.info__container}>
            <p className={styles.name}>{props.name}</p>
            <img src={props.avatar}/>
        </div>
    )
}

export default Friend
import React from "react";
import Friend from "./Friend/Friend";
import styles from './friends.module.css'
const Friends = (props) => {
    let friendsElements = props.state.map(f=><Friend name={f.name} avatar={f.avatar}/>)
    return (
        <div>
                <p className={styles.headingText}>Friends</p>

            <div className={styles.friends__container}>
                {friendsElements}
            </div>
        </div>

    )
}

export default Friends
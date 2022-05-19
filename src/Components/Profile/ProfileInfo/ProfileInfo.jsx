import React from "react";
import classes from "../Profile.module.css";

const ProfileInfo = (props) => {

    return (
        <div>
            <div>
                <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt=""
                     className={classes.background}></img>
            </div>
            <div className={classes.overview}>
                <img src={props.avatar} alt=""
                     className={classes.avatar}></img>
                <div className={classes.description}>
                    <div className={classes.name}>{props.name}</div>
                    <div>{props.dateOfBirth}</div>
                    <div>{props.city}</div>
                </div>
            </div>
        </div>
    )
}

export default ProfileInfo;

import React from "react";
import MyPosts from "./MyPosts/MyPosts";
import classes from './Profile.module.css'
const Profile = (props) => {
    return (
        <div className={classes.content}>
         <div>
         <img src="https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885__480.jpg" alt="" className={classes.background}></img>
         </div>
         <div className={classes.overview}>
         <img src="https://www.meme-arsenal.com/memes/ede6da73f226721ea502fde3e1ad9088.jpg" alt="" className={classes.avatar}></img>
        <div className={classes.description}>
          <div className={classes.name}>{props.name}</div>
          <div>{props.date}</div>
          <div>{props.city}</div>
        </div>
           
         </div>
        <MyPosts text="My posts on the wall" />
      </div>
    
    )
}

export default Profile;
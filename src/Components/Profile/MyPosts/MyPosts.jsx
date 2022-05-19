import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
import Textarea from "./Post/Textarea";
const MyPosts = (props) => {
    let myPostsElements = props.myPosts.map(p=><Post message={p.message} likesCount={p.likesCount} avatar={p.avatar}/>)
  return (
        
      <div>
      <div className={classes.headingText}>{props.myPostsInfo[0].text}</div>
      
      <div className={classes.posts__container}>
        <Textarea/>
      </div>
          {myPostsElements}

    </div>

      )
}

export default MyPosts;
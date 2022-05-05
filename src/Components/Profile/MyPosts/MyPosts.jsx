import React from "react";
import classes from './MyPosts.module.css'
import Post from './Post/Post'
const MyPosts = (props) => {
    return (
        
      <div>
      <div className={classes.headingText}>{props.text}</div>
      
      <div className={classes.posts__container}>
        <textarea></textarea>
        <button>Add</button>
      </div>
      <div className={classes.posts}>
        <Post message="hi" />
        <Post message="how are you?" />
      </div>
    </div>
             
      )
}

export default MyPosts;
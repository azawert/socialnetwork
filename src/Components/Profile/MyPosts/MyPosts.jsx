import React from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {
    let myPostsElements = props.myPosts.map(p=><Post message={p.message} likesCount={p.likesCount} avatar={p.avatar}/>)
  return (
        
      <div>
      <div className={classes.headingText}>{props.myPostsInfo[0].text}</div>
      
      <div className={classes.posts__container}>
          <div className={classes.textarea}>
              <textarea></textarea>
              <button className={classes.addButton}>Add Post</button>
          </div>
      </div>
          {myPostsElements}

    </div>

      )
}

export default MyPosts;
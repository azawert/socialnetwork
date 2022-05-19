import React from "react";
import classes from './Post.module.css'
const Post = (props) => {

    return (

             <div className={classes.item}>
              <img src={props.avatar} alt=""></img>
                 <div className={classes.postContent}>
                   {props.message}
                 </div>
                 <div>
                     likes: {props.likesCount}
                 </div>
             </div>

             
      )
}

export default Post;
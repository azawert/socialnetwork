import React from "react";
import classes from './Post.module.css'
const MyPosts = (props) => {
    return (
        
             <div className={classes.item}>
              <img src="https://www.meme-arsenal.com/memes/ede6da73f226721ea502fde3e1ad9088.jpg" alt=""></img>
               {props.message}
             </div>
             
      )
}

export default MyPosts;
import React, {useRef} from "react";
import classes from './MyPosts.module.css'
import Post from "./Post/Post";
const MyPosts = (props) => {
    let myPostsElements = props.myPosts.map(p=><Post message={p.message} likesCount={p.likesCount} avatar={p.avatar}/>)
    let newPostElement = React.createRef();
    let addPost = () => {
        let text = newPostElement.current.value;
        props.addPost(text);
    }
  return (
        
      <div>
      <div className={classes.headingText}>{props.myPostsInfo[0].text}</div>
      
      <div className={classes.posts__container}>
          <div className={classes.textarea}>
              <textarea ref={newPostElement}></textarea>
              <button className={classes.addButton} onClick={addPost}>Add Post</button>
          </div>
      </div>
          {myPostsElements}

    </div>

      )
}

export default MyPosts;
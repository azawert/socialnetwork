import React from "react";
import classes from './Post.module.css'
const Textarea = (props) => {
    return (
        <div>
            <textarea></textarea>
            <button className={classes.addButton}>Add</button>
        </div>
    )
}

export default Textarea
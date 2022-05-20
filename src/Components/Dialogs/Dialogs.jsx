import React from "react";
import classes from './Dialogs.module.css'
import Message from "./Message/Message";
import DialogItem from "./DialogItem/DialogItem";
const Dialogs = (props) => {
    let messagesElements = props.state.messages.map(m=><Message id={m.id} message={m.message}/>)
    let dialogsElements = props.state.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    return (

        <div className={classes.dialogs}>
            <div className={classes.dialogs_item}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
            </div>

        </div>
    )
}

export default Dialogs;
import React from "react";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";
const Profile = (props) => {
    let myProfileElements = props.profileInfo.map(pI=><ProfileInfo avatar={pI.avatar} name={pI.name} dateOfBirth={pI.dateOfBirth} city={pI.city} />)
    // let dialogsElements = props.dialogs.map(d=><DialogItem name={d.name} id={d.id}/>)
    return (
        <div>
            {myProfileElements}
            <MyPosts myPosts={props.myPosts} myPostsInfo={props.myPostsInfo}/>
      </div>

    )
}

export default Profile;
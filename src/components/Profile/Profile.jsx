import React from "react";
import "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.state.posts} 
                     newPostText={props.state.newPostText} 
                     dispatch={props.dispatch}/>
        </div>
    );
}

export default Profile;
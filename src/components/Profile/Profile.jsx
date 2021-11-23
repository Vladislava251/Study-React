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
                     addPost={props.addPost} 
                     updateNewPostText={props.updateNewPostText}/>
        </div>
    );
}

export default Profile;
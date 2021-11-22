import React from "react";
import "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts posts={props.posts}/>
        </div>
    );
}

export default Profile;
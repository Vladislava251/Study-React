import React from "react";
import "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPosts from "./MyPosts/MyPosts";

function Profile() {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPosts/>
        </div>
    );
}

export default Profile;
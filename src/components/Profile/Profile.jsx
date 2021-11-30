import React from "react";
import "./Profile.module.css";
import ProfileInfo from "./ProfileInfo/ProfileInfo";
import MyPostsContainer from './MyPosts/MyPostsContainer';

function Profile(props) {
    return (
        <div className="content">
            <ProfileInfo/>
            <MyPostsContainer />
        </div>
    );
}

export default Profile;
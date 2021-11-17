import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {
    return (
        <div>
            My post
            <div>
                New post
            </div>
            <div>
                <Post message="Hi, how are you?" count={15}/>
                <Post message="It's my first post." count={20}/>
            </div>
        </div>
    );
}

export default MyPosts;
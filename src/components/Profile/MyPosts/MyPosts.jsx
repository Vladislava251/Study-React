import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts() {

    let posts = [
        {id: 1, message: "Hi, how are you?", count: 15},
        {id: 2, message: "It's my first post.", count: 20}
    ];

    let postsElement = posts.map(
        p => (<Post message={p.message} count={p.count} />)
    );

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea></textarea>
                </div>
                <div>
                    <button>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;
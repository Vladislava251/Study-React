import React from "react";
import s from "./MyPosts.module.css";
import Post from "./Post/Post";

function MyPosts(props) {
    
    let postsElement = props.posts.map(
        p => (<Post message={p.message} count={p.count} key={p.id}/>)
    );

    let newPostElement = React.createRef();

    let onAddPost = () => props.addPost();//props.dispatch(addPostActionCreator());

    let onPostChange = () => {
        let text = newPostElement.current.value;
        // props.dispatch(updateNewPostTextActionCreator(text));
        props.updateNewPostText(text);
    };

    return (
        <div className={s.postsBlock}>
            <h3>My post</h3>
            <div>
                <div>
                    <textarea onChange={onPostChange} ref={newPostElement}
                              value={props.newPostText}></textarea>
                </div>
                <div>
                    <button onClick={onAddPost}>Add post</button>
                </div>
            </div>
            <div className={s.posts}>
                { postsElement }
            </div>
        </div>
    );
}

export default MyPosts;
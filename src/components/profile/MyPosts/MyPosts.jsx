import React from "react";
import style from "./MyPosts.module.css";
import Post from "./posts/post";

const MyPosts = () => {
  return (
    <div className={style.postsblock}>
      <h3>My posts</h3>
      <div>
        <textarea cols="50" rows="1"></textarea>
        <br />
        <button>Add post</button>
      </div>
      <div className={style.posts}>
        <Post message="salam alekum, how are you?" likesCount="70" />
        <Post message="salam popolam, I'm fine, and you?" likesCount="68" />
      </div>
    </div>
  );
};

export default MyPosts;

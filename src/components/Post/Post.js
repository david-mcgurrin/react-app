import React from "react";
import md5 from 'md5';
import dateFormat from 'dateformat';
import './Post.css';

const Post = (props) => {
  const createdAt = dateFormat(`${props.micropost.createdAt}`, "dddd, mmmm dS, yyyy")

  return <div key={props.micropost.id} >
    <div className="user-info">
      <img src={"https://www.gravatar.com/avatar/" + md5(props.micropost.user.email)} alt="profiler"/>
      <div className="post-info">
        <p className="author">{props.micropost.user.name}</p>
        <p className="content">{props.micropost.content}</p>
        <p className="info">{createdAt}</p>
      </div>
    </div>
</div>;
};

export default Post;

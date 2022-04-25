import React from "react";

function Comment(props) {
  return (
    <div className="comment">
      <UserInfo user={{ name: "Michael", avatarurl: "./images/male.png" }} />
      <div className="comment-text">{props.text}</div>
      <div className="comment-date">{props.date}</div>
    </div>
  );
}

function UserInfo(props) {
  return (
    <div className="userInfo">
      <Avatar user={props.user} />
      <div className="userInfo-name">{props.user.name}</div>
    </div>
  );
}

function Avatar(props) {
  return (
    <img
      width="80px"
      className="avatar"
      src={props.user.avatarurl}
      alt={props.user.name}
    />
  );
}

export default Comment;

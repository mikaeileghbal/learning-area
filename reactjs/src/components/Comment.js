import React from "react";

const comments = [
  {
    id: 1,
    user: {
      name: "Michael",
      avatarurl: "./images/male.png",
    },
    text: "Michael's opinion...",
    date: "2022/08/13",
  },
  {
    id: 2,
    user: {
      name: "Lisa",
      avatarurl: "./images/female.png",
    },
    text: "Lisa's opinion...",
    date: "2022/09/26",
  },
];

function Comment(props) {
  return (
    <div className="comment-container">
      {comments.map((comment) => {
        return (
          <div className="comment" key={comment.id}>
            <UserInfo user={comment.user} />
            <div className="comment-text">{comment.text}</div>
            <div className="comment-date">{comment.date}</div>
          </div>
        );
      })}
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

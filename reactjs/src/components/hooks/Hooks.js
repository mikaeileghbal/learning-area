import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";

export default function Hooks() {
  const [_posts, setPosts] = useState(["post 1"]);

  const posts = useMemo(() => _posts, [_posts]);

  const addPost = (post) => {
    setPosts([..._posts, post]);
  };

  useEffect(() => {
    console.log("changed posts");
  }, [posts]);

  useLayoutEffect(() => {
    console.log("Layout...");
  });

  return (
    <div>
      <button onClick={() => addPost("new post")}>Add Post</button>
      {_posts.map((post) => (
        <p key={post}>{post}</p>
      ))}
    </div>
  );
}

import React, { useState, useEffect, useMemo, useLayoutEffect } from "react";
import useMousePosition from "../custom-hooks/useMousePosition";
import useWindowSize from "../custom-hooks/useWindowSize";

export default function Hooks() {
  const [_posts, setPosts] = useState(["post 1"]);

  const [width] = useWindowSize();

  const [x, y] = useMousePosition();

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
    <div style={{ backgroundColor: `${width < 1024 ? "red" : "green"}` }}>
      <button onClick={() => addPost("new post")}>Add Post</button>
      {_posts.map((post) => (
        <p key={post}>{post}</p>
      ))}
      <p>
        <div style={{ backgroundColor: "yellow", width: `${x}px` }}>
          x:{x}, y:{y}
        </div>
      </p>
    </div>
  );
}

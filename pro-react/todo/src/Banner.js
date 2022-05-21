import React from "react";

export default function Banner({ username, todoIems }) {
  return (
    <h4 className="bg-primary text-white text-center p-2">
      {username}'s To Do List ({todoIems.filter((item) => !item.done).length}{" "}
      items to do)
    </h4>
  );
}

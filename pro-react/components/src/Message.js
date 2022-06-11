import React from "react";

export default function Message({ name }) {
  let classes =
    name === "Mikaeil"
      ? "bg-warning text-white"
      : "bg-primary text-white text-center";
  return <h4 className={classes}>This is a message from {name}</h4>;
}

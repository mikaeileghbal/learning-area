import React from "react";

export default function Summary({ names }) {
  return (
    <h4 className="bg-info text-white text-center">
      {names.map((name) => (
        <div>{`${name} contains ${name.length}`}</div>
      ))}
    </h4>
  );
}

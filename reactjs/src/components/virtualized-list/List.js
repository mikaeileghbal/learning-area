import React from "react";

// eslint-disable-next-line react/prop-types
export default function List({ data = [], renderItem, renderEmpty }) {
  if (!data.length) return renderEmpty;
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

import React from "react";

const peaks = [
  { name: "Freel Peak", elevation: 10891 },
  { name: "Monument Peak", elevation: 10067 },
  { name: "Pyramid Peak", elevation: 9983 },
  { name: "Mt. Tallac", elevation: 9735 },
];

export default function RenderProps() {
  return (
    <List
      data={peaks}
      renderItem={(item) => (
        <>
          {item.name} - {item.elevation}
        </>
      )}
      renderEmpty={<p>List is empty</p>}
    />
  );
}

function List({ data = [], renderItem, renderEmpty }) {
  if (!data.length) return renderEmpty;
  return (
    <ul>
      {data.map((item, i) => (
        <li key={i}>{renderItem(item)}</li>
      ))}
    </ul>
  );
}

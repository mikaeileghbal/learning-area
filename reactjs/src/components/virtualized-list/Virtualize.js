import React from "react";
import getData from "./data";
import List from "./List";

export default function Virtualize() {
  const bigData = getData();
  const renderItem = (item) => (
    <div style={{ display: "flex" }}>
      <img src={item.avatar} alt={item.name} width={50} />
      <p>
        {item.name} - {item.email}
      </p>
    </div>
  );
  return <List data={bigData} renderItem={renderItem} />;
}

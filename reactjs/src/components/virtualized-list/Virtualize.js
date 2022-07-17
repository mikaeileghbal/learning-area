import React, { useEffect, useRef } from "react";
import getData from "./data";

import { FixedSizeList } from "react-window";

export default function Virtualize() {
  const bigData = getData();
  const renderItem = ({ index, style }) => (
    <div style={{ ...style, display: "flex" }}>
      <img src={bigData[index].avatar} alt={bigData[index].name} width={50} />
      <p>
        {bigData[index].name} - {bigData[index].email}
      </p>
    </div>
  );
  return (
    <FixedSizeList
      height={window.innerHeight}
      width={window.innerWidth - 20}
      itemCount={bigData.length}
      itemSize={50}
    >
      {renderItem}
    </FixedSizeList>
  );
}

export function useMountedRef() {
  const mounted = useRef(false);

  useEffect(() => {
    mounted.current = true;
    return () => (mounted.current = false);
  });

  return mounted;
}

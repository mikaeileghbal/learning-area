import React, { useEffect } from "react";
import { useIterator } from "../custom-hooks/useIterator";

export default function RepoMenmu({ repository, onSelect = (f) => f }) {
  const [{ name }, previous, next] = useIterator(repository);

  useEffect(() => {
    if (!name) return;
    onSelect(name);
  }, [name]);

  return (
    <div style={{ display: "flex" }}>
      <button onClick={previous}>&lt;</button>
      <p>{name}</p>
      <button onClick={next}>&gt;</button>
    </div>
  );
}

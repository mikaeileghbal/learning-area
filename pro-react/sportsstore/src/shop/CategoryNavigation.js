import React from "react";
import { Link } from "react-router-dom";

export default function CategoryNavigation({ categories, baseUrl }) {
  return (
    <>
      <Link
        to={baseUrl}
        className="btn btn-secondary btn-block m-1"
        style={{ display: "block" }}
      >
        All
      </Link>
      {categories &&
        categories.map((category) => (
          <Link
            to={`${baseUrl}/${category.toLowerCase()}`}
            className="btn btn-secondary btn-block m-1"
            key={category}
            style={{ display: "block" }}
          >
            {category}
          </Link>
        ))}
    </>
  );
}

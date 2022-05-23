import React from "react";
import { Link } from "react-router-dom";

export default function CategoryNavigation({ categories, baseUrl }) {
  return (
    <>
      <Link to={baseUrl} className="btn btn-secondary btn-block">
        All
      </Link>
      {categories &&
        categories.map((category) => (
          <Link
            to={`${baseUrl}/${category.toLowerCase()}`}
            className="btn btn-secondary btn-block"
            key={category}
          >
            {category}
          </Link>
        ))}
    </>
  );
}

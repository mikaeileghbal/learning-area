import React from "react";
import { Link } from "react-router-dom";

export default function ToggleLink({ to, children, routerProps }) {
  const baseClass = "m-2 btn btn-block";
  const activeClass = "btn-primary";
  const inActiveClass = "btn-secondary";

  const combinedClass = `${baseClass} ${
    routerProps.match ? activeClass : inActiveClass
  }`;

  return (
    <Link to={to} className={combinedClass}>
      {children}
    </Link>
  );
}

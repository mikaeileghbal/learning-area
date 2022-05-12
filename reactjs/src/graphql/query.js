import React, { useEffect, useState } from "react";

const query = "{graphQLHub}";
const options = {
  method: "POST",
  body: query,
  headers: {
    "context-type": "application/graphql",
  },
};

export default function Query() {
  const [login, setLogin] = useState("mikaeileghbal");
  const [userData, setUserData] = useState();

  useEffect(() => {
    fetch("https://graphqlhub.com/graphql", options)
      .then((response) => response.json())
      .then((data) => console.log("GraphQL data: ", data));
  }, [options]);

  return (
    <>
      <h1>GraphQL</h1>
    </>
  );
}

import React, { useEffect, useState } from "react";

export default function GithubApp() {
  return (
    <div>
      <GithubUSer login="mikaeileghbal" />
    </div>
  );
}

// eslint-disable-next-line react/prop-types
function GithubUSer({ login }) {
  const [data, setData] = useState();
  //const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!login) return;
    //setLoading(true);

    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((result) =>
        setData(result)
          //    .then(() => setLoading(false))
          .catch((error) => console.log(error))
      );
  }, [login]);

  return (
    <>
      {<p>{data.login}</p>}
      <List
        data={["item1", "item2", "item3", "item4"]}
        renderEmpty={<p>Empty list</p>}
        renderItem={(item) => <>{item.name}</>}
      />
    </>
  );
}

// async function requestGithubUser(login) {
//   try {
//     const response = await fetch(`https://api.github.com/users/${login}`);
//     const userData = await response.json();
//     console.log(userData);
//   } catch (error) {
//     console.log(error);
//   }
// }

// function createUser(newUser) {
//   fetch("", { method: "POST ", body: JSON.stringify(newUser) });
// }

// function uploadFile(imgFile) {
//   const formData = new FormData();
//   formData.append("username", "mikaeileghbal");
//   formData.append("fullname", "Mikaeil Eghbal");
//   formData.append("avatar", imgFile);

//   fetch("", {
//     method: "POST",
//     body: formData,
//   });
// }

// eslint-disable-next-line react/prop-types
function List({ data = [], renderEmpty, renderItem }) {
  return !data.length ? (
    renderEmpty
  ) : (
    <ul>
      {data.map((item) => {
        renderItem(item);
      })}
    </ul>
  );
}

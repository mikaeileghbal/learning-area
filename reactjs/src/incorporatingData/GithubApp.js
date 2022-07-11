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

  useEffect(() => {
    if (!login) return;
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then((result) => setData(result).catch((error) => console.log(error)));
  }, [login]);
  return <p>{JSON.stringify(data)}</p>;
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

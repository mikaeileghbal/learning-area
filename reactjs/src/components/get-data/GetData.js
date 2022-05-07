import React, { useEffect, useState } from "react";

export default function GetData({ login }) {
  const [user, setUser] = useState();

  const getUser = () => {
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setUser);
    console.log("from then");
  };

  const getUserAsync = async () => {
    try {
      const response = await fetch(`https://api.github.com/users/${login}`);
      const data = await response.json();
      setUser(data);
      console.log("from async");
    } catch (err) {
      console.log(err);
    }
  };

  const uploadFile = (imageFile) => {
    const formData = new FormData();
    formData.append("usernme", "michael");
    formData.append("fullname", "Michael Eghbal");
    formData.append("avatar", imageFile);
    fetch("url", {
      method: "POST",
      body: formData,
    });
  };

  useEffect(() => {
    if (!login) return;
    getUser();
  }, [login]);

  if (!user) return <p>No user...</p>;

  return (
    <div>
      <div>
        <img src={user.avatar_url} alt={user.login} />
        <p>
          <span>{user.login}</span>
        </p>
        <p>{user.bio}</p>
      </div>
    </div>
  );
}

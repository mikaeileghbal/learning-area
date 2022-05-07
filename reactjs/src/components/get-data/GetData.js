import React, { useEffect, useState } from "react";

const getJSON = (key) => key && JSON.parse(localStorage.getItem(key));

const saveJSON = (key, data) => localStorage.setItem(key, JSON.stringify(data));

export default function GetData({ login }) {
  const [user, setUser] = useState(getJSON(`user:${login}`));
  const [error, setError] = useState();
  const [isLoading, setIsLoading] = useState(false);

  const getUser = () => {
    setIsLoading(true);
    fetch(`https://api.github.com/users/${login}`)
      .then((response) => response.json())
      .then(setUser)
      .then(() => setIsLoading(false))
      .catch((err) => {
        setError(err);
      });
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
    if (user.login === login) return;

    const { name, avatar_url, location } = user;
    saveJSON(`user:${login}`, {
      name,
      login,
      avatar_url,
      location,
    });
  }, [user]);

  useEffect(() => {
    if (!user) return;
    if (!login) return;
    getUser();
  }, [login]);

  if (isLoading) {
    console.log("Loading.....");
    return <p>Loading ...</p>;
  }
  if (error) return <p>Error.</p>;
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

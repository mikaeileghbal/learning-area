import React from "react";
import Fetch from "./Fetch";
import UserRepository from "./UserRepository";

export default function GitHubUser({ login }) {
  return (
    <Fetch
      uri={`https://api.github.com/users/${login}`}
      renderSuccess={UserDetails}
      loadingFallback={<Spinner />}
    />
  );
}

function UserDetails({ data }) {
  console.log("data", data);
  return (
    <div className="githubUser">
      <img src={data.avatar_url} alt={data.login} style={{ width: 200 }} />
      <div>
        <h1>{data.login}</h1>
        {data.name && <p>{data.name}</p>}
        {data.location && <p>{data.location}</p>}
      </div>
      <UserRepository
        login={data.login}
        onSelect={(repoName) => console.log(repoName)}
      />
    </div>
  );
}

function Spinner() {
  return (
    <div>
      <i className="fa fa-circle-o-notch fa-spin" aria-hidden="true"></i>
    </div>
  );
}

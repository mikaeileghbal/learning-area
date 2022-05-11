import React, { useState, useCallback, useEffect } from "react";
import ReactMarkdown from "react-markdown";

export default function RepositoryReadme({ repo, login }) {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();
  const [markdown, setMarkdown] = useState("");

  const loadReadme = useCallback(async (login, repo) => {
    setLoading(true);

    const uri = `https://api.github.com/repos/${login}/${repo}/readme`;
    const { download_url } = await fetch(uri).then((response) =>
      response.json()
    );
    const markdown = await fetch(download_url).then((res) => res.text());
    setMarkdown(markdown);
    setLoading(false);
  }, []);

  useEffect(() => {
    if (!repo || !login) return;
    loadReadme(login, repo);
  }, [repo]);

  if (error) return <p></p>;
  if (loading) return <p>Loading...</p>;
  return <ReactMarkdown source={markdown} />;
}

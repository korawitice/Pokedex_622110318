import React, { useState, useEffect } from "react";

async function fetchData() {
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon`);
  return response.json();
}

export default function App() {
  const [repoData, setRepoData] = useState(null);
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(undefined);
  const handleFetch = async () => {
    setLoading(true);
    try {
      const pokeRepo = await fetchData();
      setRepoData(pokeRepo);
    } catch {
      setError("Oh Noooooo");
    }
    setLoading(false);
  };
  useEffect(() => {
    handleFetch();
  }, []);
  return (
    <div className="Container">
      {!isLoading && repoData && (
        <div>
          {" "}
          <h1>Pokedex</h1>
          {repoData.results.map((item) => (
            <div>
              <ul>
                {" "}
                <li>{item.name}</li>{" "}
              </ul>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

import { useState, useEffect } from 'react'
import './App.css'
import type { Repos } from "./types/repos.types";

function App() {
  const [data, setData] = useState<Repos[]>([]);

  useEffect(() => {
    console.log("test");
    fetch('http://localhost:3000/api/repos/')
      .then(res => res.json())
      .then((data) => {
        setData(data as Repos[]);
        console.log(data)
      });
  }, []);

  return (
    <>
      <h1>Mes Repos</h1>
      {data.length > 0 && <h2>{data[0].url}</h2>}
    </>
  )
}

export default App

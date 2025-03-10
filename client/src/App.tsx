import useRepos from "./services/useRepos";
import "./App.css";

function App() {
  const { data } = useRepos();

  return (
    <>
      <h1>Mes Repos</h1>
      {data.length > 0 && <h2>{data.map((myrepo) => <h2>{myrepo.url}</h2>)}</h2>}
    </>
  )
}

export default App

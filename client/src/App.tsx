import useRepos from "./services/useRepos";
import "./App.css";

function App() {
  const { data } = useRepos();

  return (
    <>
      <h1>Mes Repos</h1>
      {data.length > 0 && <h2>{data.map((myrepo) => <div>{myrepo.url}</div>)}</h2>}
    </>
  )
}

export default App

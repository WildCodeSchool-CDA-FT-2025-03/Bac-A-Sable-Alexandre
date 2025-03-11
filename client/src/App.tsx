import useRepos from "./services/useRepos";
import ListRepo from "./components/ListRepo"
import "./App.css";

function App() {
  const { data } = useRepos();

  return (
    <>
      <h1>Mes Repos</h1>
      {data.map((myrepo) => (
        <ListRepo repo={myrepo} />
      ))}
    </>
  )
}

export default App

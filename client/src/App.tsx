import "./App.css";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <header>Navbar</header>
      <Outlet></Outlet>
      <footer>Pied de page</footer>
    </>
  )
}

export default App

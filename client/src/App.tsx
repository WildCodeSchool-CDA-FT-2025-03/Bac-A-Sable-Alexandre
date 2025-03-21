import "./App.css";
import { Outlet } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";

function App() {
  console.log(import.meta.env.VITE_URL_BASE);
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
}

export default App

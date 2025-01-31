import { useState } from "react";
import "./App.css";
import Footer from "./App/Footer/Footer";
import Header from "./App/Header/Header";
import NavBar from "./App/NavBar/NavBar";
import Main from "./App/Main/Main";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Main></Main>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

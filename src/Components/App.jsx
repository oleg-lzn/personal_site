import { useState } from "react";
import "./App.css";
import Footer from "./App/Footer/Footer";
import Header from "./App/Header/Header";
import Main from "./App/Main/Main";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Main />
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

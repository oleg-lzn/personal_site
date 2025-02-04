import "./App.css";
import Footer from "./App/Footer/Footer";
import Header from "./App/Header/Header";
import Main from "./App/Main/Main";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";
import PageNotFound from "./App/PageNotFound/PageNotFound";
import Projects from "./App/Projects/Projects";
import Resume from "./App/Resume/Resume";
import Contact from "./App/Contact/Contact";
import { useState, useEffect } from "react";

function App() {
  const [isMobile, setMobile] = useState(window.innerWidth <= 750);

  useEffect(() => {
    const handleResize = () => {
      setMobile(window.innerWidth <= 750);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <>
      <div className="app">
        <div className="app__wrapper">
          <Header isMobile={isMobile} setMobile={setMobile} />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path={routes.base} element={<Main isMobile={isMobile} />} />
            <Route path={routes.contact} element={<Contact />} />
            <Route path={routes.projects} element={<Projects />} />
            <Route path={routes.resume} element={<Resume />} />
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

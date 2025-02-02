import "./App.css";
import Footer from "./App/Footer/Footer";
import Header from "./App/Header/Header";
import Main from "./App/Main/Main";
import { Routes, Route } from "react-router-dom";
import { routes } from "../utils/routes";
import PageNotFound from "./App/PageNotFound/PageNotFound";
import Projects from "./App/Projects/Projects";

function App() {
  return (
    <>
      <div className="app">
        <div className="app__wrapper">
          <Header />
          <Routes>
            <Route path="*" element={<PageNotFound />} />
            <Route path={routes.aboutme} element={<Main />} />
            {/* <Route path={routes.contact} element={<Contact />} /> */}
            <Route path={routes.projects} element={<Projects />} />
            {/* <Route path={routes.resume} element={<Resume />} /> */}
          </Routes>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

import Profile from "../Profile/Profile";
import "./Main.css";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";

function Main({ isMobile }) {
  return (
    <div className="main">
      <Profile isMobile={isMobile} />
      <section className="main__text_section">
        <h1 className="main__title">Hello!</h1>
        <h2 className="main__description">Here's who I am & what I do:</h2>
        {!isMobile && (
          <>
            <Link to={routes.resume}>
              <button className="main__button">Resume</button>
            </Link>
            <Link to={routes.projects}>
              <button className="main__button_white">Projects</button>
            </Link>
          </>
        )}
        <p className="main__text">
          I am a fullstack developer. I develop web and mobile applications
          using Next.js, React, Node.js and React Native. I like motorcycles,
          steaks, sleeping 9 hours a day, sunny weather and cats 🐈.
        </p>
        <hr />
        <blockquote className="main__quote">
          "Waste no more time arguing about what a good man should be. Be one."
          <br />
          <br /> — Marcus Aurelius
        </blockquote>
      </section>
    </div>
  );
}

export default Main;

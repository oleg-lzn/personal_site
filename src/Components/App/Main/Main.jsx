import Profile from "../Profile/Profile";
import "./Main.css";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";

function Main({ children }) {
  return (
    <div className="main">
      <Profile />
      <section className="main__text_section">
        <h1 className="main__title">Hello!</h1>
        <h2 className="main__description">Here's who I am & what I do:</h2>
        <Link to={routes.resume}>
          <button className="main__button">Resume</button>
        </Link>
        <Link to={routes.projects}>
          <button className="main__button_white">Projects</button>
        </Link>
        <p className="main__text">
          I am a software developer at LETT DO. I like motorcycles, steaks,
          sleeping 9 hours a day, sunny weather and cats 🐈. One day I'll learn
          React Native and will develop cool apps also!
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

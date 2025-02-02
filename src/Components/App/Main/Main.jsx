import Profile from "../Profile/Profile";
import "./Main.css";

function Main({ children }) {
  return (
    <div className="main">
      <Profile />
      <section className="main__text_section">
        <h1 className="main__title">Hello!</h1>
        <h2 className="main__description">Here's who I am & what I do:</h2>
        <button className="main__button">Resume</button>
        <button className="main__button_white">Projects</button>
        <p className="main__text">
          I am a software developer. I like motorcycles, steaks, sleeping 9
          hours a day, sunny weather and cats 🐈. One day I'll learn React
          Native and will develop cool apps as well as sites!
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

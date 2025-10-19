import "./Project.css";

function Project({ ...props }) {
  const { name, description, techStack, link, image, liveDemo } = props;

  const handleClick = (address) => {
    window.open(address, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <div className="project__container">
        <h1 className="project__title">{name}</h1>
        <p className="project__description">{description}</p>
        <p className="project__tech_stack">{techStack}</p>
        <div className="project__buttons">
          <button className="project__button" onClick={() => handleClick(link)}>
            See the Project
          </button>
          <button
            className="project__button"
            onClick={
              liveDemo ? () => handleClick(liveDemo) : () => handleClick(link)
            }
          >
            {liveDemo ? "Live Demo" : "See the Github Repository"}
          </button>
        </div>
      </div>
      <img src={image} alt="project image" className="project__image" />
    </div>
  );
}

export default Project;

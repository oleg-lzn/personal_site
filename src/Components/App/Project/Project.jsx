import "./Project.css";

function Project({ ...props }) {
  const { name, description, feature, link, image } = props;

  const handleClick = (address) => {
    window.open(address, "_blank", "noopener,noreferrer");
  };

  return (
    <div className="project">
      <div className="project__container">
        <h1 className="project__title">{name}</h1>
        <p className="project__description">{description}</p>
        <p className="project__feature">{feature}</p>
        <button className="project__button" onClick={() => handleClick(link)}>
          See the Project
        </button>
      </div>
      <img src={image} alt="project image" className="project__image" />
    </div>
  );
}

export default Project;

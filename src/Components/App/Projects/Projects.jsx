import "./Projects.css";
import { projectsData } from "../../../constants/projects_data";
import Project from "../Project/Project";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__title">My Projects</h1>
      <p className="projects__description">Here are my works.</p>
      <ul className="projects__list">
        {projectsData.map(
          ({ id, name, description, techStack, link, image, liveDemo }) => {
            return (
              <Project
                key={id}
                name={name}
                description={description}
                techStack={techStack}
                link={link}
                image={image}
                liveDemo={liveDemo}
              />
            );
          }
        )}
      </ul>
    </div>
  );
}

export default Projects;

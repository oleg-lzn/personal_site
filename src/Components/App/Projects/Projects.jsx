import "./Projects.css";
import { projectsData } from "../../../constants/projects_data";
import Project from "../Project/Project";

function Projects() {
  return (
    <div className="projects">
      <h1 className="projects__title">My Projects</h1>
      <p className="projects__description">
        I'm happy to showcase my recent works. Some of them are the result of my
        education at TripleTen, others are personal passion projects that
        showcase my skills and interests.
      </p>
      <ul className="projects__list">
        {projectsData.map((item) => {
          return (
            <Project
              key={item.id}
              name={item.name}
              description={item.description}
              feature={item.feature}
              link={item.link}
              image={item.image}
            />
          );
        })}
      </ul>
    </div>
  );
}

export default Projects;

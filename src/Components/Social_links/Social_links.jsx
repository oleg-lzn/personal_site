import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import "./Social_links.css";

function SocialLinks() {
  return (
    <div className="social_links">
      <a
        href="https://www.linkedin.com/in/luzeninoleg/"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaLinkedin size={32} />
      </a>
      <a
        href="https://github.com/oleg-lzn"
        target="_blank"
        rel="noopener noreferrer"
      >
        <FaGithub size={32} />
      </a>
      <a href="mailto:luzeninoleg2012@gmail.com">
        <FaEnvelope size={32} />
      </a>
    </div>
  );
}

export default SocialLinks;

import { FaLinkedin, FaGithub } from "react-icons/fa";
import "./Social_links_footer.css";

function SocialLinksFooter() {
  return (
    <div className="footer__social-links">
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
    </div>
  );
}

export default SocialLinksFooter;

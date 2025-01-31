import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ props }) {
  return (
    <div className="footer">
      <p className="footer__text">© 2025 by Oleg Luzenin on React </p>
      <div className="footer__contact">
        <div className="footer__write_section">
          <p className="footer__email-text">
            Write{" "}
            <a
              href="mailto:luzeninoleg2012@gmail.com"
              className="footer__email-link"
            >
              luzeninoleg2012@gmail.com
            </a>
          </p>
        </div>
        <div className="footer__follow-section">
          <button className="github">Github</button>
          <button className="linkedin"> Linkedin </button>
          <button className="linkedin"> Email Me button </button>
        </div>
      </div>
    </div>
  );
}

export default Footer;

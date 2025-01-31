import SocialLinks from "../../Social_links/social_links";
import "./Footer.css";
import { Link } from "react-router-dom";

function Footer({ props }) {
  return (
    <div className="footer">
      <p className="footer__text">© 2025 by Oleg Luzenin on React </p>
      <div className="footer__contact">
        <div className="footer__write_section">
          <p className="footer__email-text">Write </p>
          <a
            href="mailto:luzeninoleg2012@gmail.com"
            className="footer__email-link"
          >
            luzeninoleg2012@gmail.com
          </a>
        </div>
        <div className="footer__follow-section">
          <p className="footer__follow-text">Follow </p>
        </div>
      </div>
    </div>
  );
}

export default Footer;

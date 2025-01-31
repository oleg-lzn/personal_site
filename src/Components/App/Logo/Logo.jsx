import "./Logo.css";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";
import logo_svg_t from "../../../assets/images/logo_svg_t.svg";

function Logo() {
  return (
    <div className="header__logo">
      <Link to={"/"}>
        <img
          src={logo_svg_t}
          alt="header_logo"
          className="header__logo_image"
        />
      </Link>
    </div>
  );
}

export default Logo;

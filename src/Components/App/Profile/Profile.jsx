import "./Profile.css";
import SocialLinks from "../Social_links/Social_links";
import avatar from "../../../assets/images/avatar.jpg";
import { Link } from "react-router-dom";
import { routes } from "../../../utils/routes";

function Profile({ isMobile }) {
  return (
    <div className="profile">
      <img src={avatar} alt="Photo of Oleg" className="profile__image" />
      <h2 className="profile__title">Oleg Luzenin</h2>
      {isMobile && (
        <div className="profile__buttons">
          <Link to={routes.resume}>
            <button className="profile__button">Resume</button>
          </Link>
          <Link to={routes.projects}>
            <button className="profile__button_white">Projects</button>
          </Link>
        </div>
      )}
      <SocialLinks />
    </div>
  );
}

export default Profile;

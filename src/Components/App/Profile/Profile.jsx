import "./Profile.css";
import SocialLinks from "../Social_links/Social_links";
import avatar from "../../../assets/images/avatar.jpg";

function Profile() {
  return (
    <div className="profile">
      <img src={avatar} alt="Photo of Oleg" className="profile__image" />
      <h2 className="profile__title">Oleg Luzenin</h2>
      <SocialLinks />
    </div>
  );
}

export default Profile;

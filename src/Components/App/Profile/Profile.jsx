import "./Profile.css";

function Profile({ props }) {
  return (
    <div className="profile">
      <div className="profile__container">
        <img src="" alt="" className="profile__image" />
        <h2 className="profile__title">Oleg Luzenin</h2>
        <div className="profile__contacts">
          <button className="github">Github pic</button>
          <button className="linkedin"> Linkedin pic </button>
          <button className="linkedin"> email </button>
        </div>
      </div>
    </div>
  );
}

export default Profile;

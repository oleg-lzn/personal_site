import "./PageNotFound.css";
import { Link } from "react-router-dom";
import cat_not_found from "../../../assets/images/cat_not_found.jpg";

function PageNotFound() {
  return (
    <div className="not-found">
      <h3 className="not-found__title">
        <span>404</span> - Page Not Found!
      </h3>
      <img
        src={cat_not_found}
        alt="not found image"
        className="not-found__image"
      />
      <p className="not-found__text">
        Uh Oh! There&apos;s nothing here... Sorry 🥺
      </p>
      <Link to="/aboutme" className="not-found__link">
        Back to the Main Page
      </Link>
    </div>
  );
}

export default PageNotFound;

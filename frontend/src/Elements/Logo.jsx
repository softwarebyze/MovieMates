import { Link } from "react-router-dom";
import "./Logo.sass";

function Logo({ type }) {
  return (
    <Link to="/" className={`logo logo-${type}`}>
      <span>Movie</span>
      <span>Mates</span>
    </Link>
  );
}

export default Logo;

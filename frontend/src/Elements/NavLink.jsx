import { Link } from "react-router-dom";
import "./NavLink.sass";

function NavLink({ path, text }) {
  return (
    <Link to={path} className="nav-link">
      <span>{text}</span>
    </Link>
  );
}

export default NavLink;

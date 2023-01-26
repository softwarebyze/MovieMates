import { Link } from "react-router-dom";
import "./NavLink.sass";

function NavLink({ path, text, active }) {
  return (
    <Link to={path} className={`nav-link ${active && "nav-link-active"}`}>
      <span>{text}</span>
    </Link>
  );
}

export default NavLink;

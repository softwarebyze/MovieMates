import {Link} from 'react-router-dom'
import "./SmallAvatar.sass";

function SmallAvatar({src, path, text}) {
  return (
    <Link to={path} className="small-avatar-container">
      <img src={src} alt="small user avatar" className="img-small-avatar"/>
      {text && <span className="small-avatar-text">{text}</span>}
    </Link>
  );
}

export default SmallAvatar;
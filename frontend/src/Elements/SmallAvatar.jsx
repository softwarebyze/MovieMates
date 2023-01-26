import {Link} from 'react-router-dom'
import "./SmallAvatar.sass";

const data = "https://m.media-amazon.com/images/M/MV5BMTkwODIzMzYyMl5BMl5BanBnXkFtZTYwNzAyNjAz._V1_QL75_UX280_CR0,25,280,280_.jpg"

function SmallAvatar({src, path, text}) {
  return (
    <Link to={path} className="small-avatar-container">
      <img src={!src && data} alt="small user avatar" className="img-small-avatar"/>
      {text && <span className="small-avatar-text">{text}</span>}
    </Link>
  );
}

export default SmallAvatar;
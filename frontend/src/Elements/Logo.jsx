import "./Logo.sass";

function Logo({type}) {
  return (
    <div className={`logo logo-${type}`}>
      <span>Movie</span>
      <span>Mates</span>
    </div>
  );
}

export default Logo;
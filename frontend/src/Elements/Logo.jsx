import "./Logo.sass";

function Logo({type}) {
  return (
    <div className={`logo logo-${type} mx-4 mt-4`}>
      <span>Movie</span>
      <span>Mates</span>
    </div>
  );
}

export default Logo;
import { useNavigate } from "react-router-dom";

export const MovieCard = ({ movie, type }) => {
  const navigate = useNavigate();
  
  const handleClick = () => {
    navigate(`/film/${movie.id}`);
    console.log("after", movie.id);
  };

  console.log(movie.id);
  return (
    <div className="movie-card" onClick={handleClick}>
      <div className="overlay"></div>
      <img 
        src={`${movie.image}`} 
        alt={`${movie.title} Poster`} 
       />
    </div>
  );
};
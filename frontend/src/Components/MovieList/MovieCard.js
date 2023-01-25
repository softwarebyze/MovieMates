import React from "react";
import Grades from "../Game/Grades";

export const MovieCard = ({ movie, type }) => {
  
  return (
    <div className="movie-card">
      <div className="overlay"></div>
     
      <img
        src={`${movie.image}`}
        alt={`${movie.title} Poster`}
      />
      

     
    </div>
  );
};

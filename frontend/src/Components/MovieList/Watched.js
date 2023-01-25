import React from "react";

import { MovieCard } from "./MovieCard";

export const Watched = () => {
  const  watched  = [
    {
        "id": "0110912",
        "resultType": "Movie",
        "image": "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7027_AL_.jpg",
        "title": "Pulp Fiction",
        "description": "1994 John Travolta, Uma Thurman"
    },
    {
        "id": "3915174",
        "resultType": "Movie",
        "image": "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_Ratio0.6757_AL_.jpg",
        "title": "Puss in Boots: The Last Wish",
        "description": "2022 Antonio Banderas, Salma Hayek"
    },
    {
        "id": "0241527",
        "resultType": "Movie",
        "image": "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
        "title": "Harry Potter and the Sorcerer's Stone",
        "description": "2001 Daniel Radcliffe, Rupert Grint"
    }
]
  console.log(watched)
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watchlist</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

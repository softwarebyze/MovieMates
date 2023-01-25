import React from 'react'

import './Carousel.css'

export default function Carousel({ currentFilm }) {

  return (
    <div id='carousel' className='m-3 d-flex flex-column align-items-center'>
        <div className='text-center'><h2 className='mb-4'>{currentFilm.movieTitle}</h2></div>
        <div className='card-group'>
            <div className='big-card carousel-card'>
                <h3>Genre</h3>
                {currentFilm.genre?.map(genre => {
                  return <p key={genre} className='genres-list'>{genre}</p>
                })}
            </div>
            <div className='big-card carousel-card' style={{ backgroundImage: `url(${currentFilm.posterImg})` }}>
                Poster
            </div>
            <div className='little-card carousel-card'>
                <h3>Age: {currentFilm.movieRatingAge}+</h3>
            </div>
            <div className='little-card carousel-card'>
                Year: <b>{currentFilm.movieYear}</b>
                <h6>Dur: {currentFilm.movieDuration.toLowerCase()}</h6>
            </div>
        </div>
    </div>
  )
}

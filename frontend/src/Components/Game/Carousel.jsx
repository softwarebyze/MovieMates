import React from 'react'

import './Carousel.css'

export default function Carousel({ currentFilm }) {

  console.log('currentFilm33', currentFilm);
  console.log('currentFilm.genre', currentFilm.genre);
  console.log('currentFilmKeys', Object.keys(currentFilm));

  return (
    <div id='carousel' className='m-3'>
        <div className='text-center'>{currentFilm.title}</div>
        <div className='card-group'>
            <div className='big-card carousel-card'>
                Info
                {console.log('currentFilm.genre', currentFilm['genre'])}
                {console.log('currentFilm.genre', currentFilm.genre)}
                {currentFilm.genre?.map(genre => {
                  return <p className='genres-list'>{genre}</p>
                })}
            </div>
            <div className='big-card carousel-card' style={{ backgroundImage: `url(${currentFilm.picture})` }}>
                Poster
            </div>
            <div className='little-card carousel-card'>
                Stuff
            </div>
            <div className='little-card carousel-card'>
                More
            </div>
        </div>
    </div>
  )
}

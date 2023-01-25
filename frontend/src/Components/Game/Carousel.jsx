import React from 'react'

import './Carousel.css'

export default function Carousel({ film }) {
  return (
    <div id='carousel' className='m-3'>
        <div className='card-group'>
            <div className='big-card carousel-card'>
                Info
            </div>
            <div className='big-card carousel-card'>
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

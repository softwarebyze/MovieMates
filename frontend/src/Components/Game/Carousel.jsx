import React from 'react'

import './Carousel.css'

export default function Carousel({ film }) {
  return (
    <div id='carousel'>
        <div className='card-group'>
        <div className='big-card'>
            Poster
        </div>
        <div className='big-card'>
            Info
        </div>
        </div>
    </div>
  )
}

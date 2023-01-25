import React, { useState } from 'react'
import Carousel from '../../components/Game/Carousel'
import Grades from '../../components/Game/Grades'
import ProgressBar from '../../components/Game/ProgressBar'

export default function GamePage() {

    const film = { title: 'Pulp Fiction', img: 'https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg' }
    const nextFilm = { title: 'Fight club', img: 'https://img.fruugo.com/product/0/08/14290080_max.jpg' }
    
    const [ratedFilms, setRatedFilms] = useState([1, 2, 3]);

    function handleGrading(e) {
        console.log('e.target.id: ' + e.target.id);
    }

    const propsForProgressBar = {
        ratedFilms,
    }

    const propsForCarousel = {
        film,
        nextFilm,
    }

    const propsForGrades = {
        handleGrading,
    }

  return (
    
    <div className='d-flex flex-column'>
        <ProgressBar {...propsForProgressBar} />
        <Carousel {...propsForCarousel} />
        <Grades {...propsForGrades} />
    </div>
  )
}

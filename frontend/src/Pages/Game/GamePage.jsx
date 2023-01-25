import React, { useState } from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'

export default function GamePage() {


    const film = { title: 'Pulp Fiction', img: 'https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg' }
    const nextFilm = { title: 'Fight club', img: 'https://img.fruugo.com/product/0/08/14290080_max.jpg' }
    
    const [isLoading, setIsLoading] = useState(false);
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
    
    <div className='d-flex flex-column m-5 game-container'>
        <ProgressBar {...propsForProgressBar} />
        <Carousel {...propsForCarousel} />
        <Grades {...propsForGrades} />
    </div>
  )
}

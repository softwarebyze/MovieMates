import React, { useState } from 'react'
import { useEffect } from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'

export default function GamePage() {


    const film = { id: 1, title: 'Pulp Fiction', img: 'https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg' }
    // const nextFilm = { id: 2, title: 'Fight club', img: 'https://img.fruugo.com/product/0/08/14290080_max.jpg' }

    const [isLoading, setIsLoading] = useState(false);

    const [mostPopularFilms, setMostPopularFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState({});
    const [nextFilm, setNextFilm] = useState({});

    const [ratedFilms, setRatedFilms] = useState([]);

    function getMostPopularFilms() {
        // get 100 most rated films from DB
        setMostPopularFilms([{movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 3, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 3, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 3, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'},])
    }

    useEffect(() => {
        getMostPopularFilms;
        setCurrentFilm(mostPopularFilms[0]);
        setNextFilm(mostPopularFilms[1])
    }, [])

    

    function handleGrading(e) {
        if (e.target.id === 'skip-film') return fetchNewFilm();
        console.log('e.target.id: ' + e.target.id);
        setRatedFilms([...ratedFilms, { filmId: film.id, grade: e.target.id.split('-')[1] } ])
    }

    useEffect(() => {
        console.log('ratedFilms', ratedFilms);
    }, [ratedFilms])

    function fetchNewFilm() {
        console.log('fetchNewFilm');
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

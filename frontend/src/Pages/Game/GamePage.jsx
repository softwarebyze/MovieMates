import React, { useState } from 'react'
import { useEffect } from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'
import fetchMovieData from '../../utils/fetchMovieData'

export default function GamePage() {


    const film = { id: 1, title: 'Pulp Fiction', img: 'https://cdn.europosters.eu/image/750/posters/pulp-fiction-cover-i1288.jpg' }
    // const nextFilm = { id: 2, title: 'Fight club', img: 'https://img.fruugo.com/product/0/08/14290080_max.jpg' }

    const [isLoading, setIsLoading] = useState(false);

    const [mostPopularFilms, setMostPopularFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState({});
    const [nextFilm, setNextFilm] = useState({});

    const [filmCounter, setFilmCounter] = useState(1);

    const [ratedFilms, setRatedFilms] = useState([]);

    function getMostPopularFilms() {
        // get 100 most rated films from DB
        setMostPopularFilms([{movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 4, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 3, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 3, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}])
    }

    useEffect(() => {
        getMostPopularFilms();
    }, [])

    async function setInitialFilms() {
        console.log('mostPopularFilms',mostPopularFilms)
        console.log('mostPopularFilms[2]', mostPopularFilms[2]);
        console.log('mostPopularFilms[2].imdbId', mostPopularFilms[2].imdbId);
        const res = await fetchMovieData({imdbId: mostPopularFilms[2].imdbId});
        console.log('res', res);
    }

    useEffect(() => {
        setInitialFilms();
        // setCurrentFilm(mostPopularFilms[filmCounter]);
        // setNextFilm(mostPopularFilms[1]);
    }, [mostPopularFilms])


    

    function handleGrading(e) {
        if (e.target.id !== 'skip-film') setRatedFilms([...ratedFilms, { filmId: currentFilm.movieId, grade: e.target.id.split('-')[1] } ]);
        console.log('e.target.id: ' + e.target.id);
        setFilmCounter(prev => prev + 1);
        setCurrentFilm(nextFilm);
        setNextFilm(mostPopularFilms[filmCounter]);
    }

    useEffect(() => {
        console.log('ratedFilms', ratedFilms);
        console.log('currentFilm', currentFilm);
        console.log('nextFilm', nextFilm);

    }, [ratedFilms, currentFilm, nextFilm])

    function fetchNewFilm() {
        console.log('fetchNewFilm');
    }

    const propsForProgressBar = {
        ratedFilms,
    }

    const propsForCarousel = {
        currentFilm,
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

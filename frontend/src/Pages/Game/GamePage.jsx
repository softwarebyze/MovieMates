import React, { useState } from 'react'
import { useContext } from 'react'
import { useEffect } from 'react'
import AppContext from '../../AppContext'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'
import fetchMovieData from '../../utils/fetchMovieData'

export default function GamePage() {

    const { setRatedFilmsForDS, submitRatings, rateMovie } = useContext(AppContext);

    const [isLoading, setIsLoading] = useState(true);

    const [mostPopularFilms, setMostPopularFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState({});
    const [nextFilm, setNextFilm] = useState({});

    const [filmCounter, setFilmCounter] = useState(2);

    const [ratedFilms, setRatedFilms] = useState([]);

    
    useEffect(() => {
        function getMostPopularFilms() {
            // get 100 most rated films from DB
            const data = [{movieId: 2959, imdbId: '0137523', tmdbId: '8844'}, {movieId: 2953, imdbId: '0104431', tmdbId: '15602'}, {movieId: 1721, imdbId: '0120338', tmdbId: '31357'}, {movieId: 1699, imdbId: '0118804', tmdbId: '11862'}, {movieId: 1729, imdbId: '0119396', tmdbId: '8844'}, {movieId: 1707, imdbId: '0119303', tmdbId: '15602'}, {movieId: 81591, imdbId: '0947798', tmdbId: '31357'}, {movieId: 2542, imdbId: '0120735', tmdbId: '11862'}, {movieId: 2706, imdbId: '0163651', tmdbId: '8844'}, {movieId: 4369, imdbId: '0232500', tmdbId: '15602'}, {movieId: 1732, imdbId: '0118715', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}]
            setMostPopularFilms(data)
        }
        getMostPopularFilms();
    }, [])

    
    useEffect(() => {
        async function setInitialFilms() {
            const filmOne = await fetchMovieData(mostPopularFilms[0]?.imdbId);
            const filmTwo = await fetchMovieData(mostPopularFilms[1]?.imdbId);
            filmOne['movieId'] = mostPopularFilms[0]?.movieId;
            filmTwo['movieId'] = mostPopularFilms[1]?.movieId;
            setCurrentFilm(filmOne);
            setNextFilm(filmTwo);
            setIsLoading(false);
        }
        setInitialFilms();
    }, [mostPopularFilms])

    async function getNextFilm() {
        setFilmCounter(prev => prev + 1);
        const nextFilm = await fetchMovieData(mostPopularFilms[filmCounter]?.imdbId);
        nextFilm['movieId'] = mostPopularFilms[filmCounter]?.movieId;
        setNextFilm(nextFilm);
    }

    function handleGrading(e) {
        if (e.target.id === 'continue') return handleContinue();
        if (e.target.id !== 'skip-film') setRatedFilms([...ratedFilms, { movieId: currentFilm.movieId, grade: (+e.target.id.split('-')[1])*2, picture: currentFilm.posterImg } ]);
        rateMovie(1, currentFilm.movieId, (+e.target.id.split('-')[1])*2);
        setCurrentFilm(nextFilm);
        getNextFilm();
    }

    function handleContinue() {
        const ratedFilmsWithoutPictures = ratedFilms.map(item => {
            return {[+item.movieId]: +item.grade}
        });
        let objectForDS = ratedFilmsWithoutPictures.reduce((acc, item) => ({...acc, ...item}), {})
        submitRatings(objectForDS);
    }
    // useEffect(() => {
    //     console.log('ratedFilms', ratedFilms);
    //     console.log('currentFilm', currentFilm);
    //     console.log('nextFilm', nextFilm);

    // }, [ratedFilms, currentFilm, nextFilm])



    const propsForProgressBar = {
        ratedFilms,
    }

    const propsForCarousel = {
        currentFilm,
        nextFilm,
    }

    const propsForGrades = {
        handleGrading,
        ratedFilms,
    }

  return (
    <div className='d-flex flex-column m-5 game-container align-items-center'>
        { !isLoading && ( <>
        <ProgressBar {...propsForProgressBar} />
        <Carousel {...propsForCarousel} />
        <Grades {...propsForGrades} />
        </>)}
    </div>
  )
}


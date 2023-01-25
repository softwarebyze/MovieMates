import React, { useState } from 'react'
import { useEffect } from 'react'
import Carousel from '../../Components/Game/Carousel'
import Grades from '../../Components/Game/Grades'
import ProgressBar from '../../Components/Game/ProgressBar'
import fetchMovieData from '../../utils/fetchMovieData'

export default function GamePage() {


    const [isLoading, setIsLoading] = useState(true);

    const [mostPopularFilms, setMostPopularFilms] = useState([]);
    const [currentFilm, setCurrentFilm] = useState({});
    const [nextFilm, setNextFilm] = useState({});

    const [filmCounter, setFilmCounter] = useState(2);

    const [ratedFilms, setRatedFilms] = useState([]);

    
    useEffect(() => {
        console.log('11111111111');
        function getMostPopularFilms() {
            console.log('2222222222222');
            // get 100 most rated films from DB
            setMostPopularFilms([{movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 4, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 4, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}, {movieId: 2, imdbId: '0113497', tmdbId: '8844'}, {movieId: 3, imdbId: '0113228', tmdbId: '15602'}, {movieId: 4, imdbId: '0114885', tmdbId: '31357'}, {movieId: 5, imdbId: '0113041', tmdbId: '11862'}])
        }
        getMostPopularFilms();
    }, [])

    
    useEffect(() => {
        async function setInitialFilms() {
            console.log('44444444444444');
            const filmOne = await fetchMovieData(mostPopularFilms[0]?.imdbId);
            const filmTwo = await fetchMovieData(mostPopularFilms[1]?.imdbId);
            const filmThree = await fetch('https://search.imdbot.workers.dev/?tt=tt' + mostPopularFilms[2]?.imdbId);
            const fadf = await filmThree.json();
            console.log('filmThree', fadf);
            console.log('filmOne', filmOne);
            console.log('filmOneSTR', JSON.stringify(filmOne));
            const newFilmOne = JSON.parse(JSON.stringify(filmOne));
            console.log('newFilmOne', newFilmOne);
            filmOne['movieId'] = mostPopularFilms[0]?.movieId;
            filmTwo['movieId'] = mostPopularFilms[1]?.movieId;
            console.log('555555555555');
            setCurrentFilm(filmOne);
            setNextFilm(filmTwo);
            setIsLoading(false);
        }
        console.log('33333333333');
        setInitialFilms();
    }, [mostPopularFilms])

    async function getNextFilm() {
        setFilmCounter(prev => prev + 1);
        const nextFilm = await fetchMovieData(mostPopularFilms[filmCounter]?.imdbId);
        console.log("this is the next film",nextFilm);
        nextFilm['movieId'] = mostPopularFilms[filmCounter]?.movieId;
        setNextFilm(nextFilm);
    }

    function handleGrading(e) {
        if (e.target.id !== 'skip-film') setRatedFilms([...ratedFilms, { filmId: currentFilm.movieId, grade: e.target.id.split('-')[1], picture: currentFilm.picture } ]);
        setCurrentFilm(nextFilm);
        getNextFilm();
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

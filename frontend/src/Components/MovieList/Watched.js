import React, { useContext, useEffect, useState } from "react";
import AppContext from "../../AppContext";
import getMovieFromImdbId from "../../utils/fetchMovieData";
import { MovieCard } from "./MovieCard";

export const Watched = () => {
  // const { getWatchList } = useContext(AppContext);
  // const userId = JSON.parse(localStorage.getItem("userId"));
  // const [watched, setWatched] = useState([])

  // useEffect(() => {
  //   async function getWl() {
  //     const wlIds = await getWatchList(userId);
  //     console.log(wlIds);
  //     const watche = wlIds.map(id => getMovieFromImdbId(id))
  //     setWatched(watche)
  //   }
  //   // getWatchList(userId);
  // }, []);
  // const watchexd = [
  //   { movieId: 2959, id: "0137523", tmdbId: "8844" },
  //   { movieId: 2953, id: "0104431", tmdbId: "15602" },
  //   { movieId: 1721, id: "0120338", tmdbId: "31357" },
  //   { movieId: 1699, id: "0118804", tmdbId: "11862" },
  //   { movieId: 1729, id: "0119396", tmdbId: "8844" },
  //   { movieId: 1707, id: "0119303", tmdbId: "15602" },
  //   { movieId: 81591, id: "0947798", tmdbId: "31357" },
  //   { movieId: 2542, id: "0120735", tmdbId: "11862" },
  //   { movieId: 2706, id: "0163651", tmdbId: "8844" },
  //   { movieId: 4369, id: "0232500", tmdbId: "15602" },
  //   { movieId: 1732, id: "0118715", tmdbId: "31357" },
  //   { movieId: 5, id: "0113041", tmdbId: "11862" },
  // ];
  // const watched = watchexd.map(async (o) => {
  //   const res = await getMovieFromImdbId(o.id);
  //   return res;
  // });
  // let g = [];
  // async function o() {
  //   for (let i = 0; i < watchexd.length; i++) {
  //     const ass = await getMovieFromImdbId(watchexd[i].id);
  //     // console.log(a.image)
  //     g.push(ass);
  //   }
  //   console.log(g);
  // }

  // o();
  const watched = [
    {
        "id": "0137523",
        "image": "https://m.media-amazon.com/images/M/MV5BNmY0YzFiY2UtOTMxYi00YTlkLTk4NmEtMDg5Yjc5MDRmYzkyXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        "title": "Fight Club",
        "movieYear": 1999,
        "genre": [
            "Drama"
        ],
        "movieRatingAge": "18",
        "movieDuration": "2H19M",
        "description": "An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.",
        "movieDirector": "David Fincher",
        "movieWriters": "Chuck Palahniuk, Jim Uhls",
        "movieCast": "Brad Pitt, Edward Norton, Meat Loaf"
    },
    {
        "id": "0104431",
        "image": "https://m.media-amazon.com/images/M/MV5BYzAyN2NhOTMtNjU0NC00MjQyLTk5NGEtNTM3YzQzZDI0YTI1XkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        "title": "Home Alone 2: Lost in New York",
        "movieYear": 1992,
        "genre": [
            "Adventure",
            "Comedy",
            "Crime"
        ],
        "movieRatingAge": "12",
        "movieDuration": "2H",
        "description": "One year after Kevin McCallister was left home alone and had to defeat a pair of bumbling burglars, he accidentally finds himself stranded in New York City - and the same criminals are not far behind.",
        "movieDirector": "Chris Columbus",
        "movieWriters": "John Hughes",
        "movieCast": "Macaulay Culkin, Joe Pesci, Daniel Stern"
    },
    {
        "id": "0120338",
        "image": "https://m.media-amazon.com/images/M/MV5BOGU0ZDEyYzAtMGU0Ny00OTk2LWI1ZDQtNjhiNzZhZmRiMjFiXkEyXkFqcGdeQXVyMTYzMDM0NTU@._V1_.jpg",
        "title": "Titanic",
        "movieYear": 1997,
        "genre": [
            "Drama",
            "Romance"
        ],
        "movieRatingAge": "12",
        "movieDuration": "3H14M",
        "description": "A seventeen-year-old aristocrat falls in love with a kind but poor artist aboard the luxurious, ill-fated R.M.S. Titanic.",
        "movieDirector": "James Cameron",
        "movieWriters": "James Cameron",
        "movieCast": "Leonardo DiCaprio, Kate Winslet, Billy Zane"
    },
    // {
    //     "id": "0118804",
    //     "image": "https://m.media-amazon.com/images/M/MV5BN2YzZWYxZTgtNzFjMy00ODg3LWJhYjItMWRkZTk0MDliYTBjXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
    //     "title": "The Butcher Boy",
    //     "movieYear": 1997,
    //     "genre": [
    //         "Comedy",
    //         "Drama"
    //     ],
    //     "movieRatingAge": "12",
    //     "movieDuration": "1H50M",
    //     "description": "The antisocial son of an alcoholic father and a bipolar mother grows up in 1960s Ireland.",
    //     "movieDirector": "Neil Jordan",
    //     "movieWriters": "Pat McCabe, Neil Jordan",
    //     "movieCast": "Stephen Rea, Fiona Shaw, Eamonn Owens"
    // },
    // {
    //     "id": "0119396",
    //     "image": "https://m.media-amazon.com/images/M/MV5BNzIzNmFkYmEtNzcyYS00ZjZmLWEzMzYtY2MxOTE5NDk4YmM3XkEyXkFqcGdeQXVyMDAwMDAwNA@@._V1_.jpg",
    //     "title": "Jackie Brown",
    //     "movieYear": 1997,
    //     "genre": [
    //         "Crime",
    //         "Drama",
    //         "Thriller"
    //     ],
    //     "movieRatingAge": "16",
    //     "movieDuration": "2H34M",
    //     "description": "A flight attendant with a criminal past gets nabbed by the ATF for smuggling. Under pressure to become an informant against the drug dealer she works for, she must find a way to secure her future without getting killed.",
    //     "movieDirector": "Quentin Tarantino",
    //     "movieWriters": "Quentin Tarantino, Elmore Leonard",
    //     "movieCast": "Pam Grier, Samuel L. Jackson, Robert Forster"
    // },
    {
        "id": "0119303",
        "image": "https://m.media-amazon.com/images/M/MV5BZTJhYjVhOWMtYTUyOS00NWM0LThjNzYtZWYxOTkwN2FhODg2XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "title": "Home Alone 3",
        "movieYear": 1997,
        "genre": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "movieRatingAge": "6",
        "movieDuration": "1H42M",
        "description": "Alex Pruitt, an 8-year-old boy living in Chicago, must fend off international spies who seek a top-secret computer chip in his toy car.",
        "movieDirector": "Raja Gosnell",
        "movieWriters": "John Hughes",
        "movieCast": "Alex D. Linz, Olek Krupa, Rya Kihlstedt"
    },
    {
        "id": "0947798",
        "image": "https://m.media-amazon.com/images/M/MV5BNzY2NzI4OTE5MF5BMl5BanBnXkFtZTcwMjMyNDY4Mw@@._V1_.jpg",
        "title": "Black Swan",
        "movieYear": 2010,
        "genre": [
            "Drama",
            "Thriller"
        ],
        "movieRatingAge": "16",
        "movieDuration": "1H48M",
        "description": "A committed dancer struggles to maintain her sanity after winning the lead role in a production of Tchaikovsky&apos;s &quot;Swan Lake&quot;.",
        "movieDirector": "Darren Aronofsky",
        "movieWriters": "Mark Heyman, Andres Heinz, John J. McLaughlin",
        "movieCast": "Natalie Portman, Mila Kunis, Vincent Cassel"
    },
    {
        "id": "0120735",
        "image": "https://m.media-amazon.com/images/M/MV5BM2FlOTM5NmEtOTE1ZC00OGJkLTgzMjgtZGYwZTljZTkyNTA4XkEyXkFqcGdeQXVyMTM2ODk1OTQ@._V1_.jpg",
        "title": "Lock, Stock and Two Smoking Barrels",
        "movieYear": 1998,
        "genre": [
            "Action",
            "Comedy",
            "Crime"
        ],
        "movieRatingAge": "16",
        "movieDuration": "1H47M",
        "description": "Eddy persuades his three pals to pool money for a vital poker game against a powerful local mobster, Hatchet Harry. Eddy loses, after which Harry gives him a week to pay back 500,000 pounds.",
        "movieDirector": "Guy Ritchie",
        "movieWriters": "Guy Ritchie",
        "movieCast": "Jason Flemyng, Dexter Fletcher, Nick Moran"
    },
    {
        "id": "0163651",
        "image": "https://m.media-amazon.com/images/M/MV5BMTg3ODY5ODI1NF5BMl5BanBnXkFtZTgwMTkxNTYxMTE@._V1_.jpg",
        "title": "American Pie",
        "movieYear": 1999,
        "genre": [
            "Comedy"
        ],
        "movieRatingAge": "12",
        "movieDuration": "1H35M",
        "description": "Four teenage boys enter a pact to lose their virginity by prom night.",
        "movieDirector": "Paul Weitz",
        "movieWriters": "Adam Herz",
        "movieCast": "Jason Biggs, Chris Klein, Thomas Ian Nicholas"
    },
    {
        "id": "0232500",
        "image": "https://m.media-amazon.com/images/M/MV5BNzlkNzVjMDMtOTdhZC00MGE1LTkxODctMzFmMjkwZmMxZjFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        "title": "The Fast and the Furious",
        "movieYear": 2001,
        "genre": [
            "Action",
            "Crime",
            "Thriller"
        ],
        "movieRatingAge": "16",
        "movieDuration": "1H46M",
        "description": "Los Angeles police officer Brian O&apos;Conner must decide where his loyalty really lies when he becomes enamored with the street racing world he has been sent undercover to destroy.",
        "movieDirector": "Rob Cohen",
        "movieWriters": "Ken Li, Gary Scott Thompson, Erik Bergquist",
        "movieCast": "Vin Diesel, Paul Walker, Michelle Rodriguez"
    },
    {
        "id": "0118715",
        "image": "https://m.media-amazon.com/images/M/MV5BMTQ0NjUzMDMyOF5BMl5BanBnXkFtZTgwODA1OTU0MDE@._V1_.jpg",
        "title": "The Big Lebowski",
        "movieYear": 1998,
        "genre": [
            "Comedy",
            "Crime"
        ],
        "movieRatingAge": "12",
        "movieDuration": "1H57M",
        "description": "Ultimate L.A. slacker Jeff &quot;The Dude&quot; Lebowski, mistaken for a millionaire of the same name, seeks restitution for a rug ruined by debt collectors, enlisting his bowling buddies for help while trying to find the millionaire&apos;s miss...",
        "movieDirector": "Joel Coen",
        "movieWriters": "Ethan Coen, Joel Coen",
        "movieCast": "Jeff Bridges, John Goodman, Julianne Moore"
    },
    {
        "id": "0113041",
        "image": "https://m.media-amazon.com/images/M/MV5BOTEyNzg5NjYtNDU4OS00MWYxLWJhMTItYWU4NTkyNDBmM2Y0XkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        "title": "Father of the Bride Part II",
        "movieYear": 1995,
        "genre": [
            "Comedy",
            "Family",
            "Romance"
        ],
        "movieRatingAge": "0",
        "movieDuration": "1H46M",
        "description": "George Banks must deal not only with his daughter&apos;s pregnancy, but also with his wife&apos;s.",
        "movieDirector": "Charles Shyer",
        "movieWriters": "Albert Hackett, Frances Goodrich, Nancy Meyers",
        "movieCast": "Steve Martin, Diane Keaton, Martin Short"
    }
]

  // const watched = [
  //   {
  //     id: "0110912",
  //     resultType: "Movie",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.7027_AL_.jpg",
  //     title: "Pulp Fiction",
  //     description: "1994 John Travolta, Uma Thurman",
  //   },
  //   {
  //     id: "3915174",
  //     resultType: "Movie",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BNjMyMDBjMGUtNDUzZi00N2MwLTg1MjItZTk2MDE1OTZmNTYxXkEyXkFqcGdeQXVyMTQ5NjA0NDM0._V1_Ratio0.6757_AL_.jpg",
  //     title: "Puss in Boots: The Last Wish",
  //     description: "2022 Antonio Banderas, Salma Hayek",
  //   },
  //   {
  //     id: "0241527",
  //     resultType: "Movie",
  //     image:
  //       "https://m.media-amazon.com/images/M/MV5BNmQ0ODBhMjUtNDRhOC00MGQzLTk5MTAtZDliODg5NmU5MjZhXkEyXkFqcGdeQXVyNDUyOTg3Njg@._V1_Ratio0.6757_AL_.jpg",
  //     title: "Harry Potter and the Sorcerer's Stone",
  //     description: "2001 Daniel Radcliffe, Rupert Grint",
  //   },
  // ];
  console.log(watched);
  return (
    <div className="movie-page">
      <div className="container">
        <div className="header">
          <h1 className="heading">Watchlist</h1>

          <span className="count-pill">
            {watched.length} {watched.length === 1 ? "Movie" : "Movies"}
          </span>
        </div>

        {watched.length > 0 ? (
          <div className="movie-grid">
            {watched.map((movie) => (
              <MovieCard movie={movie} key={movie.id} type="watched" />
            ))}
          </div>
        ) : (
          <h2 className="no-movies">No movies in your list! Add some!</h2>
        )}
      </div>
    </div>
  );
};

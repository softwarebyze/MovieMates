import { useState } from "react";

export default function FetchMovieData({ imdbId = "0113497" }) {
  const [movieData, setMovieData] = useState({});
  const url = "https://search.imdbot.workers.dev/?tt=tt";
  const getMovieFromImdbId = async (imdbId) => {
    const movieObj = {};
    console.log(url + imdbId);
    const res = await fetch(url + imdbId);
    const data = await res.json();
    console.log("data", data);
    movieObj["imdbId"] = data["imdbId"];
    movieObj["title"] = data.main.titleText.text;
    movieObj["picture"] = data.short.image;
    movieObj["genre"] = data.short.genre;
    console.log("movieObj", movieObj);
    setMovieData(movieObj);
  };
  getMovieFromImdbId(imdbId);
  return <p>{JSON.stringify(movieData)}</p>;
}

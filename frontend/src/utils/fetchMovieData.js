export default async function fetchMovieData({ imdbId = "0113497" }) {
  const movieData = {};
  const url = "https://search.imdbot.workers.dev/?tt=tt";
  const getMovieFromImdbId = async (imdbId) => {
    console.log(url + imdbId);
    const res = await fetch(url + imdbId);
    const data = await res.json();
    console.log("data", data);
    movieData["imdbId"] = data["imdbId"];
    movieData["title"] = data.main.titleText.text;
    movieData["picture"] = data.short.image;
    movieData["genre"] = data.short.genre;
    console.log("movieData", movieData);
  };
  getMovieFromImdbId(imdbId);
  return movieData;
}

export default async function getMovieFromImdbId(imdbId = "0113497") {
  const movieData = {};
  const url = "https://search.imdbot.workers.dev/?tt=tt";
  const res = await fetch(url + imdbId);
  const data = await res.json();
  movieData.imdbId = data.imdbId.split("tt")[1];
  console.log(data);

  movieData.posterImg = data.short.image;
  movieData.movieTitle = data.main.titleText.text;
  movieData.movieYear = data.top.releaseYear.year;
  movieData.genre = data.short.genre;
  movieData.movieRatingAge = data.short.contentRating;
  movieData.movieDuration = data.short.duration;
  movieData.movieDescription = data.short.description;
  movieData.movieDirector = data.short.director.name
  movieData.movieWriters = data.main.writers.credits
    // .map(credit => credit.name.nameText.text);
  movieData.movieCast = "";
  console.log("movieData", movieData);
  return movieData;
}

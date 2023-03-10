import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../Components/Footer";
import GenreTag from "../Elements/GenreTag";
import SmallAvatar from "../Elements/SmallAvatar";
import Star from "../Elements/Star";
import getMovieFromImdbId from "../utils/fetchMovieData";
import "./FilmDetailPage.sass";
import AppContext from '../AppContext'
import { db } from "../firebase";
import { collection, getDocs, query, where } from "firebase/firestore";

export default function FilmDetailPage() {
  const [data, setData] = useState({});
  const {friendsList} = useContext(AppContext);
  const { id } = useParams();

  const [friendsRating, setFriendsRating] = useState(0);
  useEffect(() => {
    getMovieFromImdbId(id)
      .then((movieData) => {
        console.log('data', movieData);
        setData(movieData);
      })
      .catch((e) => console.log("problem with fetchMovieData", e));
  }, [id]);

  async function getRatingsFromFriends() {
    console.log('i am clg')
    const q = query(collection(db, "movielensFull"), where("imdbId", "==", id.toString()));
    const querySnapshot = await getDocs(q);
    const usersWhoRated = [];
    let ratingSum = 0;
    let usersAmount = 0;
    querySnapshot.forEach((doc) => {
      // doc.data() is never undefined for query doc snapshots
      usersWhoRated.push(doc.data().userId)
      ratingSum += +doc.data().rating;
      usersAmount++;
    })
    setFriendsRating(ratingSum/usersAmount);
  }
  useEffect(() => {getRatingsFromFriends()}, []);
  return (
    <>
      <main className="main-film-detail">
        <section className="section-film-detail section-film-detail-h">
          <div className="poster-container">
            <img src={data.posterImg} alt="" className="poster-img" />
          </div>
          <div className="info-container">
            <div className="info-row1">
              <div>
                <h1 className="title-h1">{data.movieTitle}</h1>
                <div className="info-subtitle">
                  <span>{data.movieYear}</span>
                  <span> - </span>
                  <span>{data.movieRatingAge}+</span>
                  <span> - </span>
                  <span>{data.movieDuration}</span>
                </div>
              </div>
              <div className="rating-container">
                <div className="star-container">
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                  <Star />
                </div>
                <span className="rating-text">Rating {data.rating} / 5</span>
                {friendsRating && <span className="rating-text">Friends {friendsRating.toFixed(1)} / 5</span>}
              </div>
            </div>
            <div className="info-row2">
              <div className="info-data">
                <ul className="info-genre-list">
                  <GenreTag text="Crime" />
                  <GenreTag text="Drama" />
                </ul>
                <p className="info-description">{data.movieDescription}</p>
                <div className="info-team-item">
                  <span className="info-team-title">Director:</span>
                  <span className="info-team-text">{data.movieDirector}</span>
                </div>
                <div className="info-team-item">
                  <span className="info-team-title">Writers:</span>
                  <span>{data.movieWriters}</span>
                </div>
                <div className="info-team-item">
                  <span className="info-team-title">Cast:</span>
                  <span>{data.movieCast}</span>
                </div>
              </div>
              <div className="mates-container">
                <span className="mates-title">My mates who watched this:</span>
                <ul className="mates-list">
                  <li className="mates-item">
                    <SmallAvatar />
                  </li>
                  <li className="mates-item">
                    <SmallAvatar />
                  </li>
                  <li className="mates-item">
                    <SmallAvatar />
                  </li>
                  <li className="mates-item">
                    <SmallAvatar />
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <h2 className="title-h2">More like this</h2>
          <ul className="movie-list">
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
            <li className="movie-item">
              <img
                className="movie-item-img"
                src="https://occ-0-2621-1500.1.nflxso.net/dnm/api/v6/6gmvu2hxdfnQ55LZZjyzYR4kzGk/AAAABS3ZAKYWODRKGNOqVymOnengXvI3vuNv8U9eUNlsJ0FPC-fjDScHqEbwwWhMVdUr2fiZgGe820HU5OxbdpjGnY2zLNXuCPJ4YpU.webp?r=86d"
                alt=""
              />
            </li>
          </ul>
        </section>
      </main>
      <Footer />
    </>
  );
}

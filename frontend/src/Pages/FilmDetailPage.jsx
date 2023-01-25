import React from "react";
import Footer from "../Components/Footer";
import GenreTag from "../Elements/GenreTag";
import SmallAvatar from "../Elements/SmallAvatar";
import Star from "../Elements/Star";
import "./FilmDetailPage.sass";

export default function TestPage() {
  return (
    <>
      <main className="main-film-detail">
        <section className="section-film-detail section-film-detail-h">
          <div className="poster-container">
            <img
              src="https://m.media-amazon.com/images/M/MV5BNGNhMDIzZTUtNTBlZi00MTRlLWFjM2ItYzViMjE3YzI5MjljXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_FMjpg_UX1055_.jpg"
              alt=""
              className="poster-img"
            />
          </div>
          <div className="info-container">
            <div className="info-row1">
              <div>
                <h1 className="title-h1">Pulp Fiction</h1>
                <div className="info-subtitle">
                  <span>1994</span>
                  <span> - </span>
                  <span>R</span>
                  <span> - </span>
                  <span>2h 34m</span>
                </div>
              </div>
              <div className="rating-container">
                <div className="star-container">
                  <Star/><Star/><Star/><Star/><Star/>
                </div>
                <span className="rating-text">Rating 4.7 / 5</span>
              </div>
            </div>
            <div className="info-row2">
              <div className="info-data">
                <ul className="info-genre-list">
                  <GenreTag text="Crime" />
                  <GenreTag text="Drama" />
                </ul>
                <p className="info-description">
                  The lives of two mob hitmen, a boxer, a gangster and his wife,
                  and a pair of diner bandits intertwine in four tales of
                  violence and redemption.
                </p>
                <div className="info-team-item">
                  <span className="info-team-title">Director:</span>
                  <span className="info-team-text">Quentin Tarantino</span>
                </div>
                <div className="info-team-item">
                  <span className="info-team-title">Writers:</span>
                  <span>Quentin Tarantino, Roger Avary</span>
                </div>
                <div className="info-team-item">
                  <span className="info-team-title">Cast:</span>
                  <span>
                    Tim Roth, Amanda Plummer, Laura Lovelace, John Travolta,
                    Samuel L. Jackson, Phil LaMarr, Frank Whaley, Burr Steers
                    ...
                  </span>
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

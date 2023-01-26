import React, { useEffect, useState } from "react";
import SmallAvatar from "../Elements/SmallAvatar";
import Footer from "../Components/Footer";
import "./Mates.sass";

const data = [
  {
    id: 1,
    name: "Chloe Coleman",
    img: "https://m.media-amazon.com/images/M/MV5BNmQ1MDJhYmUtNTJhYS00Njk2LTgyMmEtYmNhM2JiZGMwMTc0XkEyXkFqcGdeQXVyMzQwODQxNTU@._V1_QL75_UX280_CR0,24,280,280_.jpg",
    percent: "80%"
  },
  {
    id: 2,
    name: "Daniel Campbell",
    img: "https://m.media-amazon.com/images/M/MV5BYzE5OTE1NDQtY2NkOS00Y2I5LWI3YzctZTUyODM5MGQ0NGViXkEyXkFqcGdeQXVyMjcxNDAzNQ@@._V1_QL75_UX280_CR0,17,280,280_.jpg",
    percent: "78%"
  },
  {
    id: 3,
    name: "Chloe Coleman",
    img: "https://m.media-amazon.com/images/M/MV5BNmQ1MDJhYmUtNTJhYS00Njk2LTgyMmEtYmNhM2JiZGMwMTc0XkEyXkFqcGdeQXVyMzQwODQxNTU@._V1_QL75_UX280_CR0,24,280,280_.jpg",
    percent: "64%"
  },
  {
    id: 4,
    name: "Daniel Campbell",
    img: "https://m.media-amazon.com/images/M/MV5BYzE5OTE1NDQtY2NkOS00Y2I5LWI3YzctZTUyODM5MGQ0NGViXkEyXkFqcGdeQXVyMjcxNDAzNQ@@._V1_QL75_UX280_CR0,17,280,280_.jpg",
    percent: "55%"
  },
  {
    id: 5,
    name: "Chloe Coleman",
    img: "https://m.media-amazon.com/images/M/MV5BNmQ1MDJhYmUtNTJhYS00Njk2LTgyMmEtYmNhM2JiZGMwMTc0XkEyXkFqcGdeQXVyMzQwODQxNTU@._V1_QL75_UX280_CR0,24,280,280_.jpg",
    percent: "83%"
  },
  {
    id: 6,
    name: "Daniel Campbell",
    img: "https://m.media-amazon.com/images/M/MV5BYzE5OTE1NDQtY2NkOS00Y2I5LWI3YzctZTUyODM5MGQ0NGViXkEyXkFqcGdeQXVyMjcxNDAzNQ@@._V1_QL75_UX280_CR0,17,280,280_.jpg",
    percent: "91%"
  },
];

const Mates = () => {
  return (
    <>
      <main className="main-mates-container">
        <h1 className="mates-title">My mates</h1>
        <ul className="mates-list">
          {data.map((obj) => {
            return <li key={obj.id}>
              <SmallAvatar text={obj.percent}/>
            </li>;
          })}
        </ul>
      </main>
      <Footer />
    </>
  );
};

export default Mates;

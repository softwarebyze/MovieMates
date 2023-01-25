import "./GenreTag.sass";

function GenreTag({text}) {
  return (
    <li className="genre-tag">
      {text}
    </li>
  );
}

export default GenreTag;
import "./UserMatch.sass";
import Footer from "../Footer";
import {useParams} from "react-router-dom";
import AppContext from "../../AppContext"
import { useContext } from "react";

function UserMatch() {
  const {id} = useParams()
  console.log(id)
  const {getWatchList} = useContext(AppContext)
    getWatchList(id)
  const users1 = JSON.parse(localStorage.getItem("userName"));
  const user1 = {
    name: "User 1",
    movies: [
      { name: "Movie 1", grade: "A" },
      { name: "Movie 2", grade: "B" },
      { name: "Movie 3", grade: "C" },
    ],
  };
  const user2 = {
    name: "User 2",
    movies: [
      { name: "Movie 1", grade: "A" },
      { name: "Movie 2", grade: "B" },
      { name: "Movie 3", grade: "C" },
    ],
  };

  return (
    <>
      <main className="main-usermatch-container">
        <h1 className="usermatch-title">Movies match</h1>
        <table className="usermatch-table">
          <thead className="usermatch-table-head">
            <tr className="usermatch-table-head-row">
              <th className="usermatch-table-head-column">Movie</th>
              <th className="usermatch-table-head-column">{users1}</th>
              <th className="usermatch-table-head-column">{user2.name}</th>
            </tr>
          </thead>
          <tbody className="usermatch-table-body">
            {user1.movies.map((movie, index) => (
              <tr key={index} className="usermatch-table-body-row">
                <td className="usermatch-table-body-column">{movie.name}</td>
                <td className="usermatch-table-body-column">{movie.grade}</td>
                <td className="usermatch-table-body-column">
                  {user2.movies[index].grade}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </main>
      <Footer />
    </>
  );
}

export default UserMatch;

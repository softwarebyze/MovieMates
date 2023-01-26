import { useContext } from "react";
import AppContext from "../AppContext";
import Logo from "../Elements/Logo";
import NavLink from "../Elements/NavLink";
import "./Header.sass";

const data = [
  {
    id: 1,
    path: "/game",
    text: "Rate Movies",
  },
  {
    id: 2,
    path: "/movieRec",
    text: "Recommendations",
  },
  {
    id: 3,
    path: "/profile",
    text: "Profile",
  },
  {
    id: 4,
    path: "/mates",
    text: "Mates",
  },
];

function Header({ isAuth }) {
  const { handleLogout } = useContext(AppContext);

  return (
    <>
      {isAuth && (
        <header className="header">
          <Logo type="horisontal" />{" "}
          <nav className="header-nav">
            {data.map((obj) => {
              return <NavLink key={obj.id} path={obj.path} text={obj.text} />;
            })}
          </nav>
          <button className="header-button" onClick={handleLogout}>
            Logout
          </button>
        </header>
      )}
    </>
  );
}

export default Header;

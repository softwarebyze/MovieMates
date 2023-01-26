import { useContext } from "react";
import { useLocation } from "react-router-dom";
import AppContext from "../AppContext";
import Logo from "../Elements/Logo";
import NavLink from "../Elements/NavLink";
import "./Header.sass";
import { useNavigate } from "react-router-dom";

const data = [
  {
    id: 1,
    path: "/game",
    text: "Rate Movies",
  },
  {
    id: 2,
    path: "/movieRec",
    text: "Watchlist",
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
  const location = useLocation();
  
  const navigate = useNavigate();
  const fullLogout = () => {
    handleLogout();
    navigate("/");
    navigate(0);
  };

  return (
    <>
      {isAuth && (
        <header className="header">
          <Logo type="horisontal" />{" "}
          <nav className="header-nav">
            {data.map((obj) => {
              return (
                <NavLink
                  key={obj.id}
                  path={obj.path}
                  text={obj.text}
                  active={location.pathname === obj.path}
                />
              );
            })}
          </nav>
          <button className="header-button" onClick={fullLogout}>
            Logout
          </button>
        </header>
      )}
    </>
  );
}

export default Header;

import React, { useContext } from "react";
import { Link } from "react-router-dom";
import AppContext from "../AppContext";
import Logo from "../Elements/Logo";

export default function NavBar({ isAuth }) {
  const { handleLogout } = useContext(AppContext);

  return (
    <div className="NavBar">
      <Logo type="horisontal" />{" "}
      <span className="navLinks mx-5 mt-2">
        <>
          <Link to="/">
            <p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">
              Home
            </p>
          </Link>
          {isAuth ? (
            <>
              <Link to="/game">
                <p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">
                  Rate Movies
                </p>
              </Link>
              <Link to="/movieRec">
                <p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">
                  Recommendations
                </p>
              </Link>
              <Link to="/profile">
                <p className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary">
                  Profile
                </p>
              </Link>
            </>
          ) : null}
        </>

        <span
          className="hoverLine mx-3 fs-6 mt-5 badge badge-secondary text-warning"
          onClick={handleLogout}
        >
          Logout
        </span>
      </span>
    </div>
  );
}

import React from "react";
import { NavLink } from "react-router-dom";
import SearchPage from "./Search/SearchPage";

const NavBar = () => {
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#s">
          NoteApp
        </a>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <NavLink className="nav-link" to="/" exact>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink className="nav-link" to="/about">
                Info
              </NavLink>
            </li>
          </ul>
          <SearchPage />
        </div>
      </nav>
    </>
  );
};

export default NavBar;

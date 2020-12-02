import React from "react";
import "./style.css";

function Navbar() {
  return (
    <nav className="navbar fixed-top navbar-expand-lg navbar-dark bg-dark">
      <a className="navbar-brand" href="/react-portfolio/">
        Caleb Parris
        </a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav">
          <li className="nav-item">
            <a
              href="/react-portfolio/about/"
              className={window.location.pathname === "/react-portfolio/about/" ? "nav-link active" : "nav-link"}
            >
              About
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/react-portfolio/portfolio/"
              className={window.location.pathname === "/react-portfolio/portfolio/" ? "nav-link active" : "nav-link"}
            >
              Portfolio
            </a>
          </li>
          <li className="nav-item">
            <a
              href="/react-portfolio/contact/"
              className={window.location.pathname === "/react-portfolio/contact/" ? "nav-link active" : "nav-link"}
            >
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
import React, { useState } from "react";
import { useLocation, Link } from "react-router-dom";
import "./NavBar.css";

export default function Navbar() {
  const [extendNavbar, setExtendNavbar] = useState(false);
  const location = useLocation();
  const isLoginPage = location.pathname === "/login";
  const isSignupPage = location.pathname === "/form";
  const isHomePage = location.pathname === "/";
  const isTrainingProgramPage = location.pathname === "/trainingprogram";

  return (
    <div className={`navbar-container ${extendNavbar ? "extended" : ""}`}>
      <div className="navbar-inner-container">
        <div className="left-container">
          <a href="/" className="NavLogo" alt="Logo">
            Gym Buddy
          </a>
        </div>
        <div className="right-container">
          <div className="navbar-link-container">
            {isHomePage && (
              <>
                <Link className="navbar-link" to="/form">
                  Sign Up
                </Link>
                <Link className="navbar-link" to="/login">
                  Log In
                </Link>
              </>
            )}
            {isLoginPage && (
              <>
                <Link className="navbar-link" to="/">
                  Home
                </Link>
                <Link className="navbar-link" to="/form">
                  Sign Up
                </Link>
              </>
            )}
            {isSignupPage && (
              <>
                <Link className="navbar-link" to="/">
                  Home
                </Link>
                <Link className="navbar-link" to="/login">
                  Log In
                </Link>
              </>
            )}
            {isTrainingProgramPage && (
              <>
                <Link className="navbar-link" to="/">
                  Log Out
                </Link>
              </>
            )}
            <button
              className="open-links-button"
              onClick={() => {
                setExtendNavbar((curr) => !curr);
              }}
            >
              {extendNavbar ? (
                <> &#10005; </>
              ) : (
                <>
                  {" "}
                  <Hamburger />{" "}
                </>
              )}
            </button>
          </div>
        </div>
      </div>
      {extendNavbar && (
        <div
          className="navbar-extended-container"
          onClick={() => {
            setExtendNavbar((curr) => !curr);
          }}
        >
          {isHomePage && (
            <>
              <Link className="navbar-link-extended" to="/form">
                Sign Up
              </Link>
              <Link className="navbar-link-extended" to="/login">
                Log In
              </Link>
            </>
          )}
          {isLoginPage && (
            <>
              <Link className="navbar-link-extended" to="/">
                Home
              </Link>
              <Link className="navbar-link-extended" to="/form">
                Sign Up
              </Link>
            </>
          )}
          {isSignupPage && (
            <>
              <Link className="navbar-link-extended" to="/">
                Home
              </Link>
              <Link className="navbar-link-extended" to="/login">
                Log In
              </Link>
            </>
          )}
          {isTrainingProgramPage && (
            <>
              <Link className="navbar-link-extended" to="/">
                Log Out
              </Link>
            </>
          )}
        </div>
      )}
    </div>
  );
}

const Hamburger = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="52"
    height="24"
    viewBox="0 0 52 24"
  >
    <g id="Group_9" data-name="Group 9" transform="translate(-294 -47)">
      <rect
        id="Rectangle_3"
        data-name="Rectangle 3"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 47)"
        fill="white"
      />
      <rect
        id="Rectangle_5"
        data-name="Rectangle 5"
        width="42"
        height="4"
        rx="2"
        transform="translate(304 67)"
        fill="white"
      />
      <rect
        id="Rectangle_4"
        data-name="Rectangle 4"
        width="52"
        height="4"
        rx="2"
        transform="translate(294 57)"
        fill="white"
      />
    </g>
  </svg>
);

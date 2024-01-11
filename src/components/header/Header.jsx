import React, { useState } from "react";
import "./head.css";

const Header = () => {
  const [click, setClick] = useState(false);
  return (
    <>
        <section>
          <div className="container flexSB">
            <div className="logo">
              <h1>ACADEMIA</h1>
              <span>Online Education & Learning</span>
            </div>

            <div className="social">
              <i class="fa-brands fa-facebook-f"></i>
              <i class="fa-brands fa-instagram"></i>
              <i class="fa-brands fa-twitter"></i>
              <i class="fa-brands fa-youtube"></i>
            </div>
          </div>
        </section>

        <header className="flexSB">
          <ul className={click ? "block" : "flex"}>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/courses">All Courses</a>
            </li>
            <li>
              <a href="/about">About</a>
            </li>
            <li>
              <a href="/team">Team</a>
            </li>
            <li>
              <a href="/pricing">Pricing</a>
            </li>
            <li>
              <a href="/journal">Journal</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>

          <span className="last">GET CERTIFICATE</span>

          <button onClick={() => setClick(!click)}>
            {click ? (
              <i class="fa-sharp fa-solid fa-x"></i>
            ) : (
              <i class="fa-solid fa-bars"></i>
            )}
          </button>
        </header>
    </>
  );
};

export default Header;

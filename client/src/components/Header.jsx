import React from "react";
import logo from "../assets/BEETAFORA4A-removebg-preview.png";

const Header = () => {
  return (
    <>
      <div class="nav_container">
        <div className="row m-0">
          <div className="col-md-12">
            <div class="logo_container">
              <div class="image_container">
                <img src={logo} alt="Fish Pic" />
              </div>
              <div class="logo_text_container">
                <h3>A4AQUARIUM®</h3>
                <p className="h6">"FISH LOVER'S PARADISE"</p>
              </div>
            </div>
          </div>
        </div>
        <nav class="navbar navbar-expand-lg bg-light">
          <div class="container-fluid">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="navbar-toggler-icon"></span>
            </button>
            <div
              class="collapse navbar-collapse justify-content-center"
              id="navbarNav"
            >
              <ul class="navbar-nav">
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Home
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Features
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link" href="#">
                    Pricing
                  </a>
                </li>
                <li class="nav-item">
                  <a class="nav-link">Disabled</a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>
    </>
  );
};

export default Header;

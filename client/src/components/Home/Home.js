import React from "react";
import { Link } from "react-router-dom";
import "./Home.module.css";

const Home = () => {
  return (
    <div className="home-container">
      <header className="header">
        <h1>Beauty Booking Website</h1>
        <Link to="/book" className="btn">Book Now</Link>
      </header>

      {/* Gallery */}
      <section className="gallery">
        <h2>Gallery</h2>
        <div className="gallery-grid">
          <img src="images/image8.jpeg" alt="Salon 1" />
          <img src="images/image9.jpeg" alt="Salon 2" />
          <img src="images/image10.jpeg" alt="Salon 3" />
        </div>
      </section>

      {/* Opening Hours */}
      <section className="hours">
        <h2>Opening Hours</h2>
        <ul>
          <li>Mon-Fri: 10 AM - 5 PM</li>
          <li>Sat: 10 AM - 3 PM</li>
          <li>Sun: Closed</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;

import { Link } from "react-router-dom";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.homeContainer}>
      {/* Hero Section */}
      <header className={styles.hero}>
        <div className={styles.overlay}>
          <img src="images/image16.jpeg" alt="Salon" className={styles.heroImg} />
          <h1 className={styles.title}>Best Place for Naturals <span>SPA</span> Treatment</h1>
          <p className={styles.subtitle}>Experience luxury and relaxation at the finest beauty salon.</p>
          <Link to="/book" className={styles.btn}>Get an Appointment</Link>
        </div>
      </header>

      {/* Gallery Section */}
      <section className={styles.gallery}>
        <h2>Our Salon Experience</h2>
        <div className={styles.galleryGrid}>
          <img src="images/image8.jpeg" alt="Salon 1" className={styles.galleryImg} />
          <img src="images/image9.jpeg" alt="Salon 2" className={styles.galleryImg} />
          <img src="images/image10.jpeg" alt="Salon 3" className={styles.galleryImg} />
        </div>
      </section>

      {/* Opening Hours Section */}
      <section className={styles.hours}>
        <h2>Opening Hours</h2>
        <ul>
          <li><span>Monday - Friday:</span> 10:00 AM - 5:00 PM</li>
          <li><span>Saturday:</span> 10:00 AM - 3:00 PM</li>
          <li><span>Sunday:</span> Closed</li>
        </ul>
      </section>
    </div>
  );
};

export default Home;


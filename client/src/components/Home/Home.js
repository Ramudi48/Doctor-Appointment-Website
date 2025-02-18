import React from "react";
import styles from "./Home.module.css";


const Home = () => {
  return (
    <div className={styles.home}>
      <div className={styles.overlay}>
        <div className={styles.content}>
          <h2>It's your time to<br /><strong> shine</strong></h2>
          <p>Welcome to Salon Beauty <br />  Your ultimate destination for beauty<br /> and self-care! Our salon
             offers a range of professional services,<br /> including hair styling, skincare, manicures, 
             pedicures, and more. With a<br /> team of skilled experts and a relaxing atmosphere, we are 
             committed to enhancing your beauty <br />and confidence. Book an appointment today and 
             experience the perfect blend of luxury and care!</p>
          <div className={styles.buttons}>
            <button className={styles.primaryButton}>About us</button>  
          </div>
        </div>
      </div>
      <div className={styles.imageContainer}>
      <img src="/images/image5.jpeg" alt="Salon Model" className={styles.salonImage} />

      </div>
    </div>
  );
};

export default Home;





import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header = () => {
  return (
    <header className={styles.header}>
      
      <nav className={styles.nav}>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/book">Book Appointment</Link></li>
          <li><Link to="/login">Login</Link></li>
          <li><Link to="/register">Register</Link></li>
          <li><Link to="/admin">Admin</Link></li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
import React from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png'; // Replace with actual logo

const Navbar = () => {
  return (
    <header className={styles.navbar}>
      <div className={styles.logo}>
        <img src={logo} alt="4K Sports" />
      </div>

      <nav className={styles.navLinks}>
        <a href="#">Home</a>
        <a href="#">About Us</a>
        <a href="#">Sports</a>
        <a href="#">Services</a>
        <a href="#">Contact Us</a>
    
      </nav>
    </header>
  );
};

export default Navbar;

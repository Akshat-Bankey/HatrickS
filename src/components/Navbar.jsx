import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png'; // Replace with actual logo

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Check if window exists (for SSR compatibility)
      if (typeof window !== 'undefined') {
        // Set scrolled state based on scroll position
        setScrolled(window.scrollY > 10);
      }
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Check initial scroll position
    handleScroll();

    // Clean up event listener
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
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


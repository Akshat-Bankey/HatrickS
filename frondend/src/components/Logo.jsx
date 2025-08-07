import React, { useEffect, useRef } from 'react';
import styles from './Logo.module.css';

const Logo = ({ size = 'medium' }) => {
  const logoRef = useRef(null);

  useEffect(() => {
    // Add animation class after component mount for entrance animation
    const timer = setTimeout(() => {
      if (logoRef.current) {
        logoRef.current.classList.add(styles.active);
      }
    }, 100);

    return () => clearTimeout(timer);
  }, []);

  const getLogoSize = () => {
    switch(size) {
      case 'small': return styles.small;
      case 'large': return styles.large;
      default: return styles.medium;
    }
  };

  return (
    <div className={`${styles.logoContainer} ${getLogoSize()}`} ref={logoRef}>
      <div className={styles.logoInner}>
        <div className={`${styles.logoPart} ${styles.circle}`}></div>
        <div className={`${styles.logoPart} ${styles.triangle}`}></div>
        <span className={styles.logoText}>Hatrick</span>
      </div>
      <div className={styles.logoGlow}></div>
    </div>
  );
};

export default Logo;

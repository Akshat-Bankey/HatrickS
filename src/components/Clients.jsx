import React, { useState } from 'react';
import styles from './Clients.module.css';

import client1 from '../assets/client1.jpg';
import client2 from '../assets/client2.jpg';
import client3 from '../assets/client3.jpg';
import client4 from '../assets/client4.jpg';
import client5 from '../assets/client5.jpg';
import client6 from '../assets/client6.jpg';
import client7 from '../assets/client7.jpg';

const logos = [client1, client2, client3, client4, client5, client6, client7];

const Clients = () => {
  const [startIndex, setStartIndex] = useState(0);
  const visibleCount = 4;

  const handlePrev = () => {
    setStartIndex((prev) => (prev - 1 + logos.length) % logos.length);
  };

  const handleNext = () => {
    setStartIndex((prev) => (prev + 1) % logos.length);
  };

  const visibleLogos = [...logos, ...logos].slice(startIndex, startIndex + visibleCount);

  return (
    <section className={styles.clientsSection} id="clients">
      <h2 className={styles.heading}>Our Clients</h2>
      <div className={styles.carousel}>
        <button className={styles.arrow} onClick={handlePrev}>
          &#8249;
        </button>
        <div className={styles.logoContainer}>
          {visibleLogos.map((logo, index) => (
            <div className={styles.logoWrapper} key={index}>
              <img src={logo} alt={`Client ${index + 1}`} className={styles.logoImage} />
            </div>
          ))}
        </div>
        <button className={styles.arrow} onClick={handleNext}>
          &#8250;
        </button>
      </div>
    </section>
  );
};

export default Clients;

import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import slide1 from '../assets/slide1.jpg';
import slide2 from '../assets/slide2.jpg';
import slide3 from '../assets/slide3.jpg';

const slides = [
  { image: slide1, title: 'MOST TRUSTED', subtitle: 'SPORTS INFRA CO.' },
  { image: slide2, title: 'YOUR COMPLETE', subtitle: 'TURF SOLUTION' },
  { image: slide3, title: 'PREMIUM SPORTS', subtitle: 'INSTALLATIONS' }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div id='home' className={styles.sliderContainer}>
      {/* Background Slides */}
      {slides.map((slide, index) => (
        <div
          key={index}
          className={`${styles.slide} ${index === current ? styles.active : ''}`}
          style={{ backgroundImage: `url(${slide.image})` }}
        />
      ))}

      {/* Overlay Content (on top of all slides) */}
      <div className={styles.overlay}>
        <h1>{slides[current].title}</h1>
        <h2>{slides[current].subtitle}</h2>
        <p>4K Sports Company is India’s top provider of sports infrastructure, turf & flooring.</p>
        <button>Learn More →</button>
      </div>
    </div>
  );
};

export default Hero;

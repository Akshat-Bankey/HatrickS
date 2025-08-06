import React, { useState, useEffect } from 'react';
import styles from './Hero.module.css';

import slide1 from '../assets/slide4.jpg';
import slide2 from '../assets/slide5.jpg';
import slide3 from '../assets/slide6.jpg';

const slides = [

  {
    image: slide2,
    title: 'YOUR COMPLETE',
    subtitle: 'TURF SOLUTION',
    description: '',
    buttonText: 'See Services',
    overlayStyle: {
      color: '#8efafa', // improved yellow
      fontFamily: 'Poppins, sans-serif',
      textAlign: 'center',
      top: '25%',
      left: '50%',
      transform: 'translate(-10%,-25%)'
    },
    titleColor: '#000000',
    subtitleColor: '#000000',
    descriptionColor: '#000000',
    buttonStyle: {
      backgroundColor: '#000000',
      color: '#000000',
      sizes: '10px',
    }
  },
  {
    image: slide3,
    title: 'PREMIUM SPORTS',
    subtitle: 'INSTALLATIONS',
    description: 'We build professional-grade courts & arenas.',
    buttonText: 'Our Projects',
    overlayStyle: {
      color: '#00ffb7',
      fontFamily: 'Roboto Condensed, sans-serif',
      textAlign: 'center',
      top: '10%',
      right: '0%',
      // translated: 'translate(-20%,-45%)'
    },
  },
  {
    image: slide1,
    title: 'MOST TRUSTED',
    subtitle: 'SPORTS INFRA CO.',
    description: 'India’s #1 in sports infrastructure projects.',
    buttonText: 'Explore Now',
    overlayStyle: {
      color: 'black',
      fontFamily: 'Montserrat, sans-serif',
      textAlign: 'left',
      top: '10%',
      left: '10%',
      transform: 'translate(-18%,-40%)',
    },
    titleColor: '#ffd700',
    subtitleColor: '#ffe000',
    descriptionColor: '#fff9b0',
    buttonStyle: {
      backgroundColor: '#fff9b0',
      color: '#000000'
    }
  }
];

const Hero = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const currentSlide = slides[current];

  return (
      <div id="home" className={styles.sliderContainer}>
        {/* Background Slides */}
        {slides.map((slide, index) => (
            <div
                key={index}
                className={`${styles.slide} ${index === current ? styles.active : ''}`}
                style={{ backgroundImage: `url(${slide.image})` }}
            />
        ))}

        {/* Gradient Overlay Layer */}
        <div className={styles.gradientOverlay} />

        {/* Slide Content */}
        <div
      className={styles.overlay}
      style={{
        color: currentSlide.overlayStyle.color,
        fontFamily: currentSlide.overlayStyle.fontFamily,
        textAlign: currentSlide.overlayStyle.textAlign,
        top: currentSlide.overlayStyle.top,
        left: currentSlide.overlayStyle.left,
        right: currentSlide.overlayStyle.right,
        transform: currentSlide.overlayStyle.transform,

      }}
  >
            <h1>{currentSlide.title}</h1>
            <h2>{currentSlide.subtitle}</h2>
            <p style={currentSlide.descriptionStyle}>{currentSlide.description}</p>
    {/*<button className={styles.overlay}>{currentSlide.buttonText} →</button>*/}
  </div>
</div>
  );
};

export default Hero;

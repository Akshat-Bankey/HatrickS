import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section id='about' className={styles.section} data-aos="fade-left"
  data-aos-duration="600"          // Fast animation
  data-aos-easing="ease-in-out"    // Snappy motion
  data-aos-offset="100" >
      <div className={styles.container} data-aos="fade-left"
      data-aos-delay="50"           // Quick delay
      data-aos-duration="600"
      data-aos-easing="ease-in-out">
        <h2 className={styles.heading} data-aos="fade-left"
      data-aos-delay="50"           // Quick delay
      data-aos-duration="600"
      data-aos-easing="ease-in-out">Who We Are</h2>
        <p className={styles.description} data-aos="fade-left"
      data-aos-delay="200"
      data-aos-duration="600"
      data-aos-easing="ease-in-out">
          Hatrick Sports is one of India’s premier sports infrastructure companies, delivering top-class sports surfaces and equipment solutions. From schools to stadiums, our mission is to empower play with quality.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
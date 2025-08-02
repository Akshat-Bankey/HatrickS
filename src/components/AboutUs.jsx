import React from 'react';
import styles from './AboutUs.module.css';

const AboutUs = () => {
  return (
    <section className={styles.section}>
      <div className={styles.container}>
        <h2 className={styles.heading}>Who We Are</h2>
        <p className={styles.description}>
          Hatrick Sports is one of India’s premier sports infrastructure companies, delivering top-class sports surfaces and equipment solutions. From schools to stadiums, our mission is to empower play with quality.
        </p>
      </div>
    </section>
  );
};

export default AboutUs;
import React, { Suspense, lazy } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SportsPage from '../components/SportsPage.jsx';
import ContactUs from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';
import styles from './Home.module.css';

// Uncomment to use lazy loading instead of direct imports
// const AboutUs = lazy(() => import('../components/AboutUs'));
// const SportsPage = lazy(() => import('../components/SportsPage.jsx'));
// const ContactUs = lazy(() => import('../components/Form.jsx'));
// const Footer = lazy(() => import('../components/Footer.jsx'));

const Home = () => {
  return (
    <div className={styles.pageContainer}>
      <header className={styles.headerSection}>
        <Navbar />
        <div className={styles.heroWrapper}>
          <Hero />
        </div>
      </header>
      <div className={styles.homeContainer}>
          <section className={styles.aboutWrapper}>
            <AboutUs />
          </section>

          <section className={styles.sportsSection}>
            <div className={styles.contentContainer}>
              <SportsPage />
            </div>
          </section>

          <section className={styles.formSectionWrapper}>
            <div className={styles.contentContainer}>
              <ContactUs />
            </div>
          </section>

          <section className={styles.footerSectionWrapper}>
            <div className={styles.contentContainer}>
              <Footer />
            </div>
          </section>
      </div>
    </div>
  );
};

export default Home;
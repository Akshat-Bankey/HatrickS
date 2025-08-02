import React from 'react';
 import Navbar from '../components/Navbar';
import Hero from '../components/hero';
import AboutUs from '../components/AboutUs';
import styles from './Home.module.css';
import SportsPage from '../components/SportsPage.jsx';
import ContactUs from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';
// import ProductGrid from '../components/ProductGrid';
// import Footer from '../components/Footer';
// Optional: import Testimonials from '../components/Testimonials';

const Home = () => {
  return (
    <div style={{ paddingTop: '80px' }}>
      <Navbar />
      <Hero />
      <AboutUs />
        <div className={styles.homeContainer}>
            <div className={styles.contentWrapper}>
                <div className={styles.sportsSection}>
                    <SportsPage />
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.formSection}>
                    <ContactUs />
                </div>

                <div className={styles.spacer}></div>

                <div className={styles.footerSection}>
                    <Footer />
                </div>
            </div>
        </div>
    </div>
  );
};

export default Home;

import React, { useRef, useEffect, useState } from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import AboutUs from '../components/AboutUs';
import SportsPage from '../components/SportsPage.jsx';
import ContactUs from '../components/Form.jsx';
import Footer from '../components/Footer.jsx';
import AutoScrollGallery from '../components/AutoScrollGallery.jsx';
import styles from './Home.module.css';
import Clients from '../components/Clients.jsx';

const Home = () => {
    const galleryRef = useRef(null);
    const [isGalleryVisible, setIsGalleryVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsGalleryVisible(true);
                    observer.unobserve(galleryRef.current);
                }
            },
            {
                root: null,
                rootMargin: "0px",
                threshold: 0.1
            }
        );

        if (galleryRef.current) {
            observer.observe(galleryRef.current);
        }

        return () => {
            if (galleryRef.current) {
                observer.unobserve(galleryRef.current);
            }
        };
    }, []);

    return (
        <div className={styles.pageContainer}>
            <header className={styles.headerSection}>
                <Navbar />
                <div id='home' className={styles.heroWrapper}>
                    <div className={styles.contentContainer}>
                        <Hero />
                    </div>
                </div>
            </header>
            <div className={styles.homeContainer}>
                <section id='about' className={styles.aboutWrapper}>
                    <div className={styles.centeredContent}>
                        <div className={styles.contentContainer}>
                            <AboutUs />
                        </div>
                    </div>
                </section>

                {/*<section id="sports" className={styles.sportsSection}>*/}
                    <div className={styles.contentContainer}>
                        <SportsPage />
                    </div>
                {/*</section>*/}

                <section className={styles.clientsSectionWrapper}>
                    <div className={styles.contentContainer}>
                        <Clients />
                    </div>
                </section>

                <section id='services'
                         ref={galleryRef}
                         className={`${styles.gallerySection} ${isGalleryVisible ? styles['is-visible'] : styles['fadeIn']}`}                >
                        <AutoScrollGallery />
                </section>

                <section id='contact' className={styles.formSectionWrapper}>
                    <div className={styles.contentContainer}>
                        <ContactUs />
                    </div>
                </section>

                <section id='footer' className={styles.footerSectionWrapper}>
                    <div>
                        <Footer />
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Home;

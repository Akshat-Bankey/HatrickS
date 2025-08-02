import React from "react";
import styles from "./Footer.module.css"; // Import the CSS module
import logo from "../assets/logo.png"; // Correct the path if needed

const Footer = () => {
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" }); // Smooth scrolling effect
    };

    return (
        <footer className={styles.footerContainer}>
            {/* Logo Section */}
            <div className={styles.footerSection}>
                <img className={styles.footerLogoImg} src={logo} alt="Logo" />
                <h1 className={styles.footerLogoText}>
                    Office: Vizag | Guntur | Hyderabad
                </h1>
            </div>

            {/* Address Section */}
            <div className={`${styles.footerSection} ${styles.footerAddress}`}>
                <h3>Address</h3>
                <p>Sector 10, MVP Colony,</p>
                <p>Vishakhapatnam, Andhra Pradesh</p>
                <p>530017</p>
            </div>

            <div className={`${styles.footerSection} ${styles.footerAddress}`}>
                <h3>Contact Us</h3>
                <p>Email: hatricksportsclub@gmail.com</p>
                <p>Phone: +91 8660218317, +91 9519932666</p>
            </div>

            {/* Go to Top Button */}
            <div className={`${styles.footerSection} ${styles.footerButton}`}>
                <button onClick={scrollToTop} className={styles.goToTopButton}>
                    Go to Top
                </button>
            </div>
        </footer>
    );
};
 export default Footer;
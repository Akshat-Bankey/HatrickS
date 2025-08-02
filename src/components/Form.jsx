import React from "react";
import styles from "./Form.module.css"; // Import renamed modular CSS

const ContactUs = () => {
    return (
        <div className={styles.bigContainer}>
        <div className={styles.container}>
            {/* Left section with Google Map */}
            <div className={styles.mapContainer}>
                <iframe
                    src="https://www.google.com/maps/d/embed?mid=1R9MZewfvnFak2jfBdLf6bPSh7_rTfA4&ehbc=2E312F"
                    title="Google Map"
                    allowFullScreen
                    loading="lazy"
                    className={styles.mapIframe}
                ></iframe>
            </div>

            {/* Right section with contact form */}
            <div className={styles.formContainer}>
                <h2 className={styles.heading}>Contact Us</h2>
                <form className={styles.form}>
                    {/* Name field */}
                    <label className={styles.label} htmlFor="name">
                        Name:
                    </label>
                    <input className={styles.input} type="text" id="name" name="name" required />

                    {/* Contact field */}
                    <label className={styles.label} htmlFor="contact">
                        Contact:
                    </label>
                    <input className={styles.input} type="text" id="contact" name="contact" required />

                    {/* State field */}
                    <label className={styles.label} htmlFor="state">
                        State:
                    </label>
                    <input className={styles.input} type="text" id="state" name="state" required />

                    {/* Country field */}
                    <label className={styles.label} htmlFor="country">
                        Country:
                    </label>
                    <input className={styles.input} type="text" id="country" name="country" required />

                    {/* Inquiry field */}
                    <label className={styles.label} htmlFor="inquiry">
                        Inquiry:
                    </label>
                    <textarea
                        className={styles.textarea}
                        id="inquiry"
                        name="inquiry"
                        rows="4"
                        required
                    ></textarea>

                    {/* Submit button */}
                    <button className={styles.button} type="submit">
                        Submit
                    </button>
                </form>
            </div>
        </div>
        </div>
    );
};

export default ContactUs;
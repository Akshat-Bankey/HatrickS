import React, { useState, useRef, useEffect } from "react";
import styles from "./Form.module.css";


const ContactUs = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        state: '',
        country: '',
        inquiry: ''
    });

    const [activeField, setActiveField] = useState(null);
    const [formSubmitted, setFormSubmitted] = useState(false);
    const formRef = useRef(null);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add(styles.visible);
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.2 }
        );

        const elements = document.querySelectorAll('.reveal-on-scroll');
        elements.forEach(el => observer.observe(el));

        return () => observer.disconnect();
    }, []);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFocus = (field) => {
        setActiveField(field);
    };



    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const res = await fetch('http://localhost:5000/api/form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (res.ok) {
                setFormSubmitted(true);
            } else {
                const data = await res.json();
                alert(data.message || 'Something went wrong');
            }
        } catch (error) {
            console.error("Error submitting form:", error);
            alert("Failed to submit. Please try again later.");
        }
    };

    // Contact information
    const contactInfo = [
        { icon: '📱', title: 'Phone', info: '+91 98765 43210', link: 'tel:+919876543210' },
        { icon: '✉️', title: 'Email', info: 'info@hatricksports.com', link: 'mailto:info@hatricksports.com' },
        { icon: '📍', title: 'Office', info: 'New Delhi, India', link: 'https://goo.gl/maps/YourLocationLink' }
    ];
    const [touchedFields, setTouchedFields] = useState({});
    const handleBlur = (field) => {
        setActiveField(null);
        setTouchedFields(prev => ({
            ...prev,
            [field]: true
        }));
    };


    return (
        <div id="contact" className={`${styles.bigContainer} reveal-on-scroll`} ref={formRef}>
            <div className={styles.container}>
                {/* Left section with form and contact info */}
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <h5 className={styles.subtitle}>GET IN TOUCH</h5>
                        <h2 className={styles.heading}>Contact <span className="text-gradient">Hatrick Sports</span></h2>
                        <p className={styles.description}>Have questions about our services or want to discuss your project? Fill out the form below and our team will get back to you within 24 hours.</p>
                    </div>

                    <div className={styles.contactInfoContainer}>
                        {contactInfo.map((item, index) => (
                            <a href={item.link} key={index} className={styles.contactInfoItem}>
                                <span className={styles.contactIcon}>{item.icon}</span>
                                <div>
                                    <h4>{item.title}</h4>
                                    <p>{item.info}</p>
                                </div>
                            </a>
                        ))}
                    </div>

                    {formSubmitted ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <div className={`${styles.formField} ${activeField === 'name' || touchedFields.name ? styles.active : ''}`}>
                                    <label className={styles.label} htmlFor="name">
                                        Full Name
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        id="name"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('name')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>

                                <div className={`${styles.formField} ${activeField === 'email' || touchedFields.email ? styles.active : ''}`}>
                                    <label className={styles.label} htmlFor="email">
                                        Email Address
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="email"
                                        id="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('email')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={styles.inputGroup}>
                                <div className={`${styles.formField} ${activeField === 'phone' || touchedFields.phone ? styles.active : ''}`}>
                                    <label className={styles.label} htmlFor="phone">
                                        Phone Number
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="tel"
                                        id="phone"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('phone')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>

                                <div className={`${styles.formField} ${activeField === 'state' || touchedFields.state ? styles.active : ''}`}>
                                    <label className={styles.label} htmlFor="state">
                                        State
                                    </label>
                                    <input
                                        className={styles.input}
                                        type="text"
                                        id="state"
                                        name="state"
                                        value={formData.state}
                                        onChange={handleChange}
                                        onFocus={() => handleFocus('state')}
                                        onBlur={handleBlur}
                                        required
                                    />
                                </div>
                            </div>

                            <div className={`${styles.formField} ${activeField === 'country' || touchedFields.country ? styles.active : ''}`}>
                                <label className={styles.label} htmlFor="country">
                                    Country
                                </label>
                                <input
                                    className={styles.input}
                                    type="text"
                                    id="country"
                                    name="country"
                                    value={formData.country}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('country')}
                                    onBlur={handleBlur}
                                    required
                                />
                            </div>

                            <div className={`${styles.formField} ${activeField === 'inquiry' || touchedFields.inquiry ? styles.active : ''}`}>
                                <label className={styles.label} htmlFor="inquiry">
                                    Your Message
                                </label>
                                <textarea
                                    className={styles.textarea}
                                    id="inquiry"
                                    name="inquiry"
                                    rows="4"
                                    value={formData.inquiry}
                                    onChange={handleChange}
                                    onFocus={() => handleFocus('inquiry')}
                                    onBlur={handleBlur}
                                    required
                                ></textarea>
                            </div>

                            <button className={styles.button} type="submit">
                                <span>Send Message</span>
                                <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M14.5 1.5L7 9" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                    <path d="M14.5 1.5L10 14.5L7 9L1.5 6L14.5 1.5Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                        </form>
                    )}
                </div>

                {/* Right section with Google Map */}
                <div className={styles.mapContainer}>
                    <div className={styles.mapOverlay}></div>
                    <iframe
                        src="https://www.google.com/maps/d/embed?mid=1R9MZewfvnFak2jfBdLf6bPSh7_rTfA4&ehbc=2E312F"
                        title="Google Map"
                        allowFullScreen
                        loading="lazy"
                        className={styles.mapIframe}
                    ></iframe>
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
import React, { useState, useRef, useEffect, lazy, Suspense } from "react";
import styles from "./Form.module.css";

// Lazy load contact info component
const ContactInfo = lazy(() => Promise.resolve({
    default: ({ contactInfo }) => (
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
    )
}));

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

    // Track if component is visible
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    // Add visible class for animation
                    entry.target.classList.add(styles.visible);
                    // Set visible state to load heavy components
                    setIsVisible(true);
                }
            },
            { threshold: 0.1, rootMargin: '100px' }
        );

        if (formRef.current) {
            observer.observe(formRef.current);
        }

        return () => {
            if (formRef.current) {
                observer.unobserve(formRef.current);
            }
        };
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

    const handleBlur = () => {
        setActiveField(null);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // Simulate form submission
        setTimeout(() => {
            setFormSubmitted(true);
            setFormData({
                name: '',
                email: '',
                phone: '',
                state: '',
                country: '',
                inquiry: ''
            });

            // Reset success message after 5 seconds
            setTimeout(() => {
                setFormSubmitted(false);
            }, 5000);
        }, 1000);
    };

    // Contact information
    const contactInfo = [
        { icon: '📱', title: 'Phone', info: '+91 98765 43210', link: 'tel:+919876543210' },
        { icon: '✉️', title: 'Email', info: 'info@hatricksports.com', link: 'mailto:info@hatricksports.com' },
        { icon: '📍', title: 'Office', info: 'New Delhi, India', link: 'https://goo.gl/maps/YourLocationLink' }
    ];

    return (
        <div id="contact" className={styles.bigContainer} ref={formRef}>
            <div className={styles.container}>
                {/* Left section with form and contact info */}
                <div className={styles.formContainer}>
                    <div className={styles.formHeader}>
                        <h5 className={styles.subtitle}>GET IN TOUCH</h5>
                        <h2 className={styles.heading}>Contact <span className="text-gradient">Hatrick Sports</span></h2>
                        <p className={styles.description}>Have questions about our services or want to discuss your project? Fill out the form below and our team will get back to you within 24 hours.</p>
                    </div>

                    <Suspense fallback={<div className={styles.loadingContainer}><div className={styles.loadingSpinner}></div></div>}>
                        <ContactInfo contactInfo={contactInfo} />
                    </Suspense>

                    {formSubmitted ? (
                        <div className={styles.successMessage}>
                            <div className={styles.successIcon}>✓</div>
                            <h3>Thank You!</h3>
                            <p>Your message has been sent successfully. We'll get back to you shortly.</p>
                        </div>
                    ) : (
                        <form className={styles.form} onSubmit={handleSubmit}>
                            <div className={styles.inputGroup}>
                                <div className={`${styles.formField} ${activeField === 'name' ? styles.active : ''}`}>
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

                                <div className={`${styles.formField} ${activeField === 'email' ? styles.active : ''}`}>
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
                                <div className={`${styles.formField} ${activeField === 'phone' ? styles.active : ''}`}>
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

                                <div className={`${styles.formField} ${activeField === 'state' ? styles.active : ''}`}>
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

                            <div className={`${styles.formField} ${activeField === 'country' ? styles.active : ''}`}>
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

                            <div className={`${styles.formField} ${activeField === 'inquiry' ? styles.active : ''}`}>
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
                    <div className={styles.mapPlaceholder}>
                        <div className={styles.mapLoading}>
                            <div className={styles.loadingSpinner}></div>
                            <p>Loading map...</p>
                        </div>
                    </div>
                    {isVisible && (
                        <iframe
                            src="https://www.google.com/maps/d/embed?mid=1R9MZewfvnFak2jfBdLf6bPSh7_rTfA4&ehbc=2E312F"
                            title="Google Map"
                            allowFullScreen
                            loading="lazy"
                            className={styles.mapIframe}
                            onLoad={() => {
                                const placeholder = document.querySelector(`.${styles.mapPlaceholder}`);
                                if (placeholder) placeholder.style.display = 'none';
                            }}
                        ></iframe>
                    )}
                </div>
            </div>
        </div>
    );
};

export default ContactUs;
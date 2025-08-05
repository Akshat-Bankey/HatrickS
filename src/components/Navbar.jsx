import React, { useState, useEffect } from 'react';
import styles from './Navbar.module.css';
import logo from '../assets/logo.png';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  // ✅ Scroll to section smoothly with offset
  const scrollToSection = (sectionId) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(sectionId);
    if (element) {
      const yOffset = -80; // Adjust based on your navbar height
      const y = element.getBoundingClientRect().top + window.pageYOffset + yOffset;
      window.scrollTo({ top: y, behavior: 'smooth' });
    }
  };

  // ✅ Highlight active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);

      const sections = ['home', 'about', 'sports', 'services', 'contact'];
      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const rect = el.getBoundingClientRect();
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header className={`${styles.navbar} ${scrolled ? styles.scrolled : ''}`}>
      <div className={styles.navContainer}>
        <div className={styles.logo}>
          <img src={logo} alt="Hatrick Sports" />
          <span className={styles.logoText}>Hatrick<span>Sports</span></span>
        </div>

        <button 
          className={styles.mobileMenuButton} 
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <nav className={`${styles.navLinks} ${mobileMenuOpen ? styles.mobileOpen : ''}`}>
          {['home', 'about', 'sports', 'services', 'contact'].map(section => (
            <a 
              key={section}
              href={`#${section}`}
              className={activeSection === section ? styles.active : ''}
              onClick={(e) => {
                e.preventDefault();
                scrollToSection(section);
              }}
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
              {activeSection === section && <span className={styles.activeIndicator}></span>}
            </a>
          ))}

          {/* ✅ Fix for "Get in Touch" CTA button */}
          <a 
            href="#contact"
            className={styles.ctaButton}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection('contact');
            }}
          >
            Get in Touch
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

import React, { useState, useEffect } from 'react';
import Logo from './Logo';
import styles from './PageLoader.module.css';

const PageLoader = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate loading time
    const timer = setTimeout(() => {
      setLoading(false);
      document.body.style.overflow = 'visible'; // Enable scrolling after loading
    }, 2000);

    // Disable scrolling during loading
    document.body.style.overflow = 'hidden';

    return () => {
      clearTimeout(timer);
      document.body.style.overflow = 'visible';
    };
  }, []);

  if (!loading) return null;

  return (
    <div className={styles.pageLoader}>
      <div className={styles.loaderContent}>
        <Logo size="large" />
        <div className={styles.progressBar}>
          <div className={styles.progress}></div>
        </div>
        <p className={styles.loadingText}>Building excellence in sports...</p>
      </div>
      <div className={styles.loaderBackground}></div>
    </div>
  );
};

export default PageLoader;

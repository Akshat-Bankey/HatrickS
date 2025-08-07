import React, { useEffect, useState } from 'react';
import Home from './main/home';
import AOS from 'aos';
import NProgress from 'nprogress';
import 'aos/dist/aos.css';
import 'nprogress/nprogress.css';
import './App.css'; // Ensure CSS contains loader styles

const App = () => {
  const [loading, setLoading] = useState(true);
  const [fadeOut, setFadeOut] = useState(false);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 120,
    });

    NProgress.start();

    const timer = setTimeout(() => {
      setFadeOut(true); // start fade-out
      setTimeout(() => {
        setLoading(false); // remove loader after fade
      }, 800); // should match the CSS transition duration
    }, 1200); // control how long loading stays

    NProgress.done();
    return () => clearTimeout(timer);
  }, []);

  if (loading) {
    return (
        <div className={`loader-wrapper ${fadeOut ? 'fade-out' : ''}`}>
          <div className="logo-shimmer"></div>
          <p className="loading-text">Loading...</p>
        </div>
    );
  }

  return <Home />;
};

export default App;

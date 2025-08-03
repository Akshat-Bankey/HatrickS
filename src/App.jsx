import React, { useEffect } from 'react';
import Home from './main/home';
import AOS from 'aos';
import 'aos/dist/aos.css';

const App = () => {
  useEffect(() => {
    AOS.init({
      duration: 1000,      // Animation duration
      once: true,          // Animate only once
      offset: 120,         // Offset (in px) from the original trigger point
    });
  }, []);

  return <Home />;
};

export default App;

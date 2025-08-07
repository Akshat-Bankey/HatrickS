import { useEffect } from 'react';

const ScrollAnimations = () => {
  useEffect(() => {
    // Function to check if element is in viewport
    const isInViewport = (element) => {
      const rect = element.getBoundingClientRect();
      return (
        rect.top <= (window.innerHeight || document.documentElement.clientHeight) * 0.8 &&
        rect.bottom >= 0
      );
    };

    // Function to handle scroll and reveal elements
    const handleScroll = () => {
      const revealElements = document.querySelectorAll(
        '.reveal-on-scroll, .reveal-from-left, .reveal-from-right, .scale-in'
      );

      revealElements.forEach((element) => {
        if (isInViewport(element)) {
          element.classList.add('active');
        }
      });
    };

    // Add scroll event listener
    window.addEventListener('scroll', handleScroll);

    // Initial check on load
    handleScroll();

    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return null; // This component doesn't render anything
};

export default ScrollAnimations;

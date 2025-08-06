import React, { useRef, useEffect } from "react";
import styles from "./AutoScrollGallery.module.css";
import gallery1 from '../assets/gallery1.jpg';
import gallery2 from '../assets/gallery2.jpg';
import gallery3 from '../assets/gallery3.jpg';
import gallery4 from '../assets/gallery4.jpg';
import gallery5 from '../assets/gallery5.jpg';
import gallery6 from '../assets/gallery6.jpg';

// ...existing code...
const images = [
  {
      src:gallery1,
      title: "Cricket Ground"
  },
  {
    src: gallery2,
    title: "Basketball Court"
  },
  {
    src: gallery3,
    title: "Football Academy"
  },
  {
    src: gallery4,
    title: "Tennis Court"
  },
  {
    src: gallery5,
    title: "Swimming Pool Facility"
  },
  {
    src:gallery6,
    title: "Gym & Fitness Area"
  }
];


// ...existing code...

const AutoScrollGallery = () => {
    const scrollRef = useRef(null);

    useEffect(() => {
        const scrollContainer = scrollRef.current;
        if (!scrollContainer) return;

        let animationFrameId;
        const scroll = () => {
            scrollContainer.scrollLeft += 1; // Adjust speed here

            // When the scroll position reaches the halfway point (the end of the first set of duplicated images),
            // reset it to 0 to create a seamless loop.
            if (scrollContainer.scrollLeft >= scrollContainer.scrollWidth / 2) {
                scrollContainer.scrollLeft = 0;
            }

            animationFrameId = requestAnimationFrame(scroll);
        };

        animationFrameId = requestAnimationFrame(scroll);

        // Cleanup function to cancel the animation frame
        return () => {
            cancelAnimationFrame(animationFrameId);
        };
    }, []);

    return (
        <div id='services' className={styles.galleryWrapper}>
            <h2 className={styles.galleryHeading}>Our Facilities</h2>
            <div className={styles.galleryContainer} ref={scrollRef}>
                {[...images, ...images].map((item, index) => (
                    <div key={index} className={styles.imageCard}>
                        <img src={item.src} alt={`gallery-${index}`} className={styles.image} />
                        <div className={styles.imageTitle}>{item.title}</div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default AutoScrollGallery;
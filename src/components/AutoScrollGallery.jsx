import React, { useRef, useEffect } from "react";
import styles from "./AutoScrollGallery.module.css";

// ...existing code...
const images = [
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Cricket_ground_Kurla_Mumbai_India.jpg/640px-Cricket_ground_Kurla_Mumbai_India.jpg",
    title: "Cricket Ground"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Indoor_Basketball_Court.jpg/640px-Indoor_Basketball_Court.jpg",
    title: "Basketball Court"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1e/St_George%27s_Park_Football_center.jpg/640px-St_George%27s_Park_Football_center.jpg",
    title: "Football Academy"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Tennis_Court.jpg/640px-Tennis_Court.jpg",
    title: "Tennis Court"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f5/Swimming_pool_empty.jpg/640px-Swimming_pool_empty.jpg",
    title: "Swimming Pool Facility"
  },
  {
    src: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a0/Home_gym.jpg/640px-Home_gym.jpg",
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
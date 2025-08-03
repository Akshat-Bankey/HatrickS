import React, { useRef, useEffect } from "react";
import styles from "./AutoScrollGallery.module.css";

const images = [
    { src: "/images/gallery1.jpg", title: "Football Training" },
    { src: "/images/gallery2.jpg", title: "Basketball Court" },
    { src: "/images/gallery3.jpg", title: "Cricket Session" },
    { src: "/images/gallery4.jpg", title: "Tennis Match" },
    { src: "/images/gallery5.jpg", title: "Swimming Pool" },
    { src: "/images/gallery6.jpg", title: "Gym Area" },
];

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
        <div className={styles.galleryWrapper}>
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
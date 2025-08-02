import React, { useState } from 'react';
import styles from './SportsDisplay.module.css';

// Sample sports data - this could be imported from a data file
const sportsData = [
  {
    id: 1,
    name: 'Football',
    description: 'Experience the thrill of football with comprehensive training programs designed for all skill levels.',
    imageUrl: 'https://images.unsplash.com/photo-1575361204480-aadea25e6e68?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Professional coaching', 'State-of-the-art facilities', 'Regular tournaments', 'Age-appropriate training']
  },
  {
    id: 2,
    name: 'Cricket',
    description: 'Join our cricket academy and learn the techniques of batting, bowling, and fielding from experienced coaches.',
    imageUrl: 'https://images.unsplash.com/photo-1540747913346-19e32dc3e97e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Professional equipment', 'Net practice sessions', 'Match simulations', 'Performance analysis']
  },
  {
    id: 3,
    name: 'Basketball',
    description: 'Develop your basketball skills through our comprehensive training program focusing on dribbling, shooting, and teamwork.',
    imageUrl: 'https://images.unsplash.com/photo-1546519638-68e109498ffc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Indoor courts', 'Skill development', 'Team strategy', 'Competitive games']
  },
  {
    id: 4,
    name: 'Swimming',
    description: 'Learn proper swimming techniques in our temperature-controlled pool with certified instructors guiding your progress.',
    imageUrl: 'https://images.unsplash.com/photo-1530549387789-4c1017266635?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Olympic-sized pool', 'Certified instructors', 'All age groups', 'Safety protocols']
  },
  {
    id: 5,
    name: 'Tennis',
    description: 'Master the art of tennis with our structured coaching programs suitable for beginners to advanced players.',
    imageUrl: 'https://images.unsplash.com/photo-1595435934249-5df7ed86e1c0?ixlib=rb-1.2.1&auto=format&fit=crop&w=1000&q=80',
    features: ['Multiple courts', 'Professional rackets', 'Tournament preparation', 'Individual attention']
  },
  {
    id: 6,
    name: 'Badminton',
    description: 'Improve your badminton skills with our specialized training focusing on footwork, strokes, and game strategy.',
    imageUrl: 'https://images.unsplash.com/photo-1721760886982-3c643f05813d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    features: ['Indoor courts', 'Equipment provided', 'Technique refinement', 'Competitive matches']
  },
  {
    id: 7,
    name: 'PickleBall',
    description: 'Improve your badminton skills with our specialized training focusing on footwork, strokes, and game strategy.',
    imageUrl: 'https://images.pexels.com/photos/20519105/pexels-photo-20519105.jpeg',
    features: ['Indoor courts', 'Equipment provided', 'Technique refinement', 'Competitive matches']
  },
  {
    id: 8,
    name: 'Volleyball',
    description: 'Improve your badminton skills with our specialized training focusing on footwork, strokes, and game strategy.',
    imageUrl: 'https://images.pexels.com/photos/6203673/pexels-photo-6203673.jpeg',
    features: ['Indoor courts', 'Equipment provided', 'Technique refinement', 'Competitive matches']
  }
];

const SportsDisplay = () => {
  // State to track which sport is being viewed in detail
  const [activeSport, setActiveSport] = useState(null);

  // Toggle detailed view for a sport
  const toggleSportDetail = (sportId) => {
    if (activeSport === sportId) {
      setActiveSport(null); // Close if already open
    } else {
      setActiveSport(sportId); // Open the clicked sport
    }
  };

  return (
    <div className={styles.sportsDisplayContainer}>

      <div className={styles.sportsGrid}>
        {sportsData.map((sport) => (
          <div 
            key={sport.id} 
            className={`${styles.sportCard} ${activeSport === sport.id ? styles.active : ''}`}
            onClick={() => toggleSportDetail(sport.id)}
          >
            <div className={styles.sportCardInner}>
              {/* Front of card - Basic info */}
              <div className={styles.sportCardFront}>
                <div 
                  className={styles.sportImage} 
                  style={{ backgroundImage: `url(${sport.imageUrl})` }}
                >
                  <div className={styles.sportImageOverlay}>
                    <h3>{sport.name}</h3>
                  </div>
                </div>
              </div>

              {/* Back of card - Detailed info */}
              <div className={styles.sportCardBack}>
                <h3>{sport.name}</h3>
                <p className={styles.sportDescription}>{sport.description}</p>
                <div className={styles.sportFeatures}>
                  <h4>Features:</h4>
                  <ul>
                    {sport.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                </div>
                <button className={styles.learnMoreBtn}>Enroll Now</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default SportsDisplay;

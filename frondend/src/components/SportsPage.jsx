import React from 'react';
import SportsDisplay from './SportsDisplay';
import styles from './SportsPage.module.css';

const SportsPage = () => {
  return (
    <div className={styles.simpleSportsContainer}>
      <h2 className={styles.mainHeading}>Our Sports Programs</h2>
      <div className={styles.sportsDisplayWrapper}>
        <SportsDisplay />
      </div>
    </div>
  );
};

export default SportsPage;

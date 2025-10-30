// components/hero/HeroContent.tsx (Simple Version)
'use client';
import React from 'react';
import styles from './hero.module.css';

interface HeroContentProps {
  isDark?: boolean;
}

const HeroContent: React.FC<HeroContentProps> = ({ isDark = false }) => {
  return (
    <section className={`${styles.hero} ${isDark ? styles.darkHero : ''}`}>
      <div className={styles.heroContent}>
        <h1 className={`${styles.title} ${isDark ? styles.darkTitle : ''}`}>
          Al-Asr ( Islamic Service )
        </h1>
        <p className={`${styles.description} ${isDark ? styles.darkDescription : ''}`}>
          Islamic services, calendar events, and community programs. Stay updated with the latest from Al-Asr ( Islamic Service ).
        </p>
        <div className={styles.badges}>
          <span className={`${styles.badge} ${isDark ? styles.darkBadge : ''}`}>📅 Islamic Calendar</span>
          <span className={`${styles.badge} ${isDark ? styles.darkBadge : ''}`}>🕌 Services</span>
          <span className={`${styles.badge} ${isDark ? styles.darkBadge : ''}`}>👥 Community</span>
        </div>
      </div>
    </section>
  );
};

export default HeroContent;
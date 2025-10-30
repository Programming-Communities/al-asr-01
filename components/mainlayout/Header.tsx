'use client';
import { useState } from 'react';
import styles from './Header.module.css';

const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <div className={styles.layout}>
          
          {/* Brand Section */}
          <div className={styles.brand}>
            <img 
              src="/logo.webp" 
              alt="Al-Asr Islamic Service" 
              className={styles.logo}
            />
            <div className={styles.brandText}>
              <h1 className={styles.title}>Al-Asr</h1>
              <p className={styles.subtitle}>Islamic Service & Community</p>
            </div>
          </div>

          {/* Search Bar - Desktop */}
          <div className={styles.searchContainer}>
            <div className={styles.searchWrapper}>
              <input 
                type="text" 
                placeholder="Search services, events..."
                className={styles.searchInput}
              />
              <button className={styles.searchButton}>
                🔍
              </button>
            </div>
          </div>

          {/* Actions */}
          <div className={styles.actions}>
            <button 
              onClick={() => setIsDark(!isDark)}
              className={styles.themeButton}
            >
              {isDark ? '☀️' : '🌙'}
            </button>
            
            {/* Mobile Search Button */}
            <button className={styles.mobileSearchButton}>
              🔍
            </button>
          </div>

        </div>
      </div>
    </header>
  );
};

export default Header;
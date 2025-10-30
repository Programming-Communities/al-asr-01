'use client';
import { useState } from 'react';
import styles from './NavigationMenu.module.css';

const NavigationMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: 'Home', href: '/', icon: '🏠' },
    { name: 'Islamic Calendar', href: '/calendar', icon: '📅' },
    { name: 'Prayer Times', href: '/prayer', icon: '🕌' },
    { name: 'Quran Learning', href: '/quran', icon: '📖' },
    { name: 'Community Events', href: '/events', icon: '👥' },
    { name: 'Services', href: '/services', icon: '⚡' },
    { name: 'Contact', href: '/contact', icon: '📞' },
  ];

  return (
    <nav className={`${styles.nav} ${styles.darkNav}`}>
      <div className={styles.container}>
        
        {/* Desktop Navigation */}
        <div className={styles.desktopNav}>
          <div className={styles.navItems}>
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`${styles.navLink} ${styles.darkNavLink}`}
              >
                <span>{item.icon}</span>
                <span>{item.name}</span>
              </a>
            ))}
          </div>

          {/* Social Media Icons */}
          <div className={styles.socialIcons}>
            {['📘', '📷', '🐦', '📺'].map((icon, index) => (
              <a key={index} href="#" className={`${styles.socialIcon} ${styles.darkSocialIcon}`}>
                {icon}
              </a>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        <div className={styles.mobileNav}>
          <button 
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className={`${styles.mobileMenuButton} ${styles.darkMobileMenuButton}`}
          >
            <span>Menu</span>
            <span>{isMenuOpen ? '▲' : '▼'}</span>
          </button>

          {isMenuOpen && (
            <div className={`${styles.mobileMenu} ${styles.darkMobileMenu}`}>
              {navItems.map((item) => (
                <a
                  key={item.name}
                  href={item.href}
                  className={`${styles.mobileNavLink} ${styles.darkMobileNavLink}`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  <span className={styles.navIcon}>{item.icon}</span>
                  <span>{item.name}</span>
                </a>
              ))}
              
              {/* Mobile Social Media */}
              <div className={`${styles.mobileSocialIcons} ${styles.darkMobileSocialIcons}`}>
                {['📘', '📷', '🐦', '📺'].map((icon, index) => (
                  <a key={index} href="#" className={`${styles.mobileSocialIcon} ${styles.darkMobileSocialIcon}`}>
                    {icon}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>

      </div>
    </nav>
  );
};

export default NavigationMenu;
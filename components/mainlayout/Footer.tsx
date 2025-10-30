import styles from './Footer.module.css';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        {/* Main Footer Content */}
        <div className={styles.mainFooter}>
          <div className={styles.footerGrid}>
            
            {/* Brand Section */}
            <div className={styles.brandSection}>
              <div className={styles.brand}>
                <img src="/logo.webp" alt="Al-Asr" className={styles.brandLogo} />
                <div className={styles.brandText}>
                  <h3>Al-Asr</h3>
                  <p>Islamic Service & Community</p>
                </div>
              </div>
              <p className={styles.brandDescription}>
                Providing comprehensive Islamic services, calendar events, and community programs. 
                Stay connected with your faith and community.
              </p>
              
              {/* Social Media */}
              <div className={styles.socialLinks}>
                {['📘 Facebook', '📷 Instagram', '🐦 Twitter', '📺 YouTube'].map((social, index) => (
                  <a key={index} href="#" className={styles.socialLink}>
                    {social}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div className={styles.linksSection}>
              <h4>Quick Links</h4>
              <ul className={styles.linksList}>
                {['Home', 'Services', 'Calendar', 'Prayer Times', 'Quran Learning', 'Community'].map((link) => (
                  <li key={link} className={styles.linkItem}>
                    <a href="#">{link}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className={styles.contactSection}>
              <h4>Contact Us</h4>
              <div className={styles.contactInfo}>
                <p>📞 +92 300 1234567</p>
                <p>📧 info@al-asr.org</p>
                <p>📍 Islamic Center, Main Street</p>
              </div>
              
              {/* Auth Buttons */}
              <div className={styles.authButtons}>
                <button className={styles.loginButton}>
                  Login
                </button>
                <button className={styles.signupButton}>
                  Sign Up
                </button>
              </div>
            </div>

          </div>
        </div>

        {/* Bottom Bar */}
        <div className={styles.bottomBar}>
          <p className={styles.copyright}>© 2025 Al-Asr Islamic Service. All rights reserved.</p>
          <div className={styles.legalLinks}>
            <a href="#" className={styles.legalLink}>Privacy Policy</a>
            <a href="#" className={styles.legalLink}>Terms of Service</a>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
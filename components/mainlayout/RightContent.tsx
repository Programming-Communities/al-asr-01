import styles from './RightContent.module.css';

const RightContent = () => {
  return (
    <div className={styles.container}>
      
      {/* Prayer Times Widget */}
      <div className={`${styles.prayerTimes} ${styles.darkPrayerTimes}`}>
        <h3 className={`${styles.prayerTitle} ${styles.darkPrayerTitle}`}>Today's Prayer Times</h3>
        <div className={styles.prayerList}>
          {[
            { name: 'Fajr', time: '5:30 AM', active: false },
            { name: 'Dhuhr', time: '12:30 PM', active: true },
            { name: 'Asr', time: '4:15 PM', active: false },
            { name: 'Maghrib', time: '6:45 PM', active: false },
            { name: 'Isha', time: '8:00 PM', active: false },
          ].map((prayer, index) => (
            <div key={index} className={`${styles.prayerItem} ${
              prayer.active ? styles.activePrayer : styles.inactivePrayer
            } ${prayer.active ? styles.darkActivePrayer : styles.darkInactivePrayer}`}>
              <span className={`${styles.prayerName} ${
                prayer.active ? styles.activePrayerName : ''
              } ${prayer.active ? styles.darkActivePrayerName : styles.darkPrayerName}`}>
                {prayer.name}
              </span>
              <span className={`${styles.prayerTime} ${
                prayer.active ? styles.activePrayerTime : ''
              } ${prayer.active ? styles.darkActivePrayerTime : styles.darkPrayerTime}`}>
                {prayer.time}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Social Media Feed */}
      <div className={`${styles.socialFeed} ${styles.darkSocialFeed}`}>
        <h3 className={`${styles.feedTitle} ${styles.darkFeedTitle}`}>Community Updates</h3>
        <div className={styles.feedList}>
          {[
            { user: "Community", text: "Friday prayer will start at 1:30 PM today.", time: "2h ago" },
            { user: "Quran Center", text: "New Quran learning session starts tomorrow.", time: "5h ago" },
            { user: "Events Team", text: "Community iftar this Saturday at 6 PM.", time: "1d ago" },
          ].map((post, index) => (
            <div key={index} className={`${styles.feedItem} ${styles.darkFeedItem}`}>
              <div className={styles.userInfo}>
                <div className={styles.userAvatar}>{post.user[0]}</div>
                <span className={`${styles.userName} ${styles.darkUserName}`}>{post.user}</span>
              </div>
              <p className={`${styles.feedText} ${styles.darkFeedText}`}>{post.text}</p>
              <div className={`${styles.feedTime} ${styles.darkFeedTime}`}>{post.time}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div className={`${styles.quickActions} ${styles.darkQuickActions}`}>
        <h3 className={`${styles.actionsTitle} ${styles.darkActionsTitle}`}>Quick Actions</h3>
        <div className={styles.actionsGrid}>
          {[
            { name: 'Donate', icon: '💰' },
            { name: 'Volunteer', icon: '🤝' },
            { name: 'Learn', icon: '📚' },
            { name: 'Events', icon: '🎪' },
          ].map((action, index) => (
            <button key={index} className={`${styles.actionButton} ${styles.darkActionButton}`}>
              <span className={styles.actionIcon}>{action.icon}</span>
              <span className={`${styles.actionName} ${styles.darkActionName}`}>{action.name}</span>
            </button>
          ))}
        </div>
      </div>

    </div>
  );
};

export default RightContent;
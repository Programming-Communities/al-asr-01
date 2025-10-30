import styles from './LeftContent.module.css';

const LeftContent = () => {
  const quickLinks = [
    { name: 'Daily Prayers', icon: '🕌', count: '5 Times' },
    { name: 'Quran Verses', icon: '📖', count: 'Daily' },
    { name: 'Islamic Events', icon: '📅', count: '12+' },
    { name: 'Community Help', icon: '🤝', count: '24/7' },
  ];

  return (
    <div className={styles.container}>
      
      {/* Quick Stats */}
      <div className={`${styles.quickStats} ${styles.darkQuickStats}`}>
        <h3 className={`${styles.title} ${styles.darkTitle}`}>Quick Access</h3>
        <div className={styles.statsList}>
          {quickLinks.map((link, index) => (
            <div key={index} className={`${styles.statItem} ${styles.darkStatItem}`}>
              <div className={styles.statContent}>
                <span className={styles.statIcon}>{link.icon}</span>
                <span className={`${styles.statName} ${styles.darkStatName}`}>{link.name}</span>
              </div>
              <span className={`${styles.statCount} ${styles.darkStatCount}`}>{link.count}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Upcoming Events */}
      <div className={`${styles.events} ${styles.darkEvents}`}>
        <h3 className={`${styles.title} ${styles.darkTitle}`}>Upcoming Events</h3>
        <div className={styles.eventsList}>
          {[
            { name: 'Friday Prayer', time: 'Today 1:30 PM', type: '🕌 Prayer' },
            { name: 'Quran Class', time: 'Tomorrow 6:00 PM', type: '📚 Learning' },
            { name: 'Community Iftar', time: 'This Saturday', type: '👥 Community' },
          ].map((event, index) => (
            <div key={index} className={`${styles.eventItem} ${styles.darkEventItem}`}>
              <div className={`${styles.eventName} ${styles.darkEventName}`}>{event.name}</div>
              <div className={`${styles.eventTime} ${styles.darkEventTime}`}>{event.time}</div>
              <div className={`${styles.eventType} ${styles.darkEventType}`}>{event.type}</div>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
};

export default LeftContent;
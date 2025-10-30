'use client';
import React from 'react';
import styles from './maincontent.module.css';
import { BlogCard } from '../maincard';

interface MainContentProps {
  isDark?: boolean;
}

// Sample data - aap real data use karenge
const samplePosts = [
  {
    title: "Islamic Calendar 2024 - Important Dates",
    excerpt: "Complete Islamic calendar with all important dates, holidays, and events for the year 2024.",
    categories: [{ name: "Calendar" }],
    featuredImage: {
      sourceUrl: "/images/calendar.jpg",
      altText: "Islamic Calendar"
    },
    date: "2024-01-15",
    slug: "islamic-calendar-2024"
  },
  {
    title: "Friday Prayer Guidelines",
    excerpt: "Complete guide to Friday prayers including timings, requirements, and recommended practices.",
    categories: [{ name: "Prayer" }],
    featuredImage: {
      sourceUrl: "/images/prayer.jpg",
      altText: "Friday Prayer"
    },
    date: "2024-01-10",
    slug: "friday-prayer-guidelines"
  },
  {
    title: "Community Events This Month",
    excerpt: "Join our community events including Quran classes, charity drives, and family gatherings.",
    categories: [{ name: "Community" }],
    featuredImage: {
      sourceUrl: "/images/community.jpg",
      altText: "Community Events"
    },
    date: "2024-01-05",
    slug: "community-events-month"
  },
  {
    title: "Understanding Zakat Calculation",
    excerpt: "Learn how to calculate Zakat properly with examples and common questions answered.",
    categories: [{ name: "Zakat" }],
    featuredImage: {
      sourceUrl: "/images/zakat.jpg",
      altText: "Zakat Calculation"
    },
    date: "2024-01-01",
    slug: "zakat-calculation-guide"
  },
  {
    title: "Ramadan Preparation Guide",
    excerpt: "Get ready for Ramadan with our comprehensive preparation guide for spiritual success.",
    categories: [{ name: "Ramadan" }],
    featuredImage: {
      sourceUrl: "/images/ramadan.jpg",
      altText: "Ramadan Preparation"
    },
    date: "2023-12-20",
    slug: "ramadan-preparation-guide"
  },
  {
    title: "Quran Learning Programs",
    excerpt: "Join our Quran learning programs for all ages and levels. Online and in-person classes available.",
    categories: [{ name: "Education" }],
    featuredImage: {
      sourceUrl: "/images/quran.jpg",
      altText: "Quran Learning"
    },
    date: "2023-12-15",
    slug: "quran-learning-programs"
  }
];

const MainContent: React.FC<MainContentProps> = ({ isDark = false }) => {
  return (
    <main className={styles.mainContent}>
      <div className={styles.container}>
        {/* Section Title */}
        <div className={styles.sectionHeader}>
          <h2 className={`${styles.sectionTitle} ${isDark ? styles.darkSectionTitle : ''}`}>
            Latest Articles & Updates
          </h2>
          <p className={`${styles.sectionDescription} ${isDark ? styles.darkSectionDescription : ''}`}>
            Stay updated with the latest Islamic content, events, and community news from Al-Asr.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className={styles.cardsGrid}>
          {samplePosts.map((post, index) => (
            <BlogCard
              key={post.slug}
              title={post.title}
              excerpt={post.excerpt}
              categories={post.categories}
              featuredImage={post.featuredImage}
              date={post.date}
              slug={post.slug}
              index={index}
              isDark={isDark}
            />
          ))}
        </div>

        {/* Load More Button */}
        <div className={styles.loadMoreContainer}>
          <button className={`${styles.loadMoreButton} ${isDark ? styles.darkLoadMoreButton : ''}`}>
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  );
};

export default MainContent;
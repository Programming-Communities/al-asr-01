import React from 'react';
import styles from './SkeletonLoader.module.css';

export const HomePageSkeleton = () => {
  return (
    <div className={styles.homePageSkeleton}>
      {/* Header Skeleton */}
      <div className={styles.headerSkeleton}>
        <div className={styles.headerContainer}>
          <div className={styles.logoSkeleton}></div>
          <div className={styles.emptySpace}></div>
        </div>
        
        <div className={styles.heroSkeleton}>
          <div className={styles.heroTitleSkeleton}></div>
          <div className={styles.heroTextSkeleton}></div>
          <div className={styles.heroTextSkeletonShort}></div>
          <div className={styles.heroBadgeSkeleton}></div>
        </div>
      </div>

      {/* Blog List Skeleton */}
      <div className={styles.container}>
        {/* Category Filters Skeleton */}
        <div className={styles.categoryFiltersSkeleton}>
          {[1, 2, 3, 4, 5].map((item) => (
            <div key={item} className={styles.categorySkeleton}></div>
          ))}
        </div>

        {/* Posts Grid Skeleton */}
        <div className={styles.postsGridSkeleton}>
          {[1, 2, 3, 4, 5, 6, 7, 8].map((item) => (
            <BlogItemSkeleton key={item} />
          ))}
        </div>
      </div>
    </div>
  );
};

export const PostPageSkeleton = () => {
  return (
    <div className={styles.postPageSkeleton}>
      <div className={styles.postContainerSkeleton}>
        {/* Featured Image Skeleton */}
        <div className={styles.featuredImageSkeleton}></div>

        {/* Content Skeleton */}
        <div className={styles.postContentSkeleton}>
          {/* Categories Skeleton */}
          <div className={styles.categoriesSkeleton}>
            <div className={styles.categorySkeletonSmall}></div>
          </div>

          {/* Title Skeleton */}
          <div className={styles.postTitleSkeleton}></div>
          <div className={styles.postTitleSkeletonShort}></div>

          {/* Meta Info Skeleton */}
          <div className={styles.metaSkeleton}>
            <div className={styles.metaItemSkeleton}></div>
            <div className={styles.metaItemSkeleton}></div>
          </div>

          {/* Content Skeleton */}
          <div className={styles.contentSkeleton}>
            <div className={styles.textLineSkeleton}></div>
            <div className={styles.textLineSkeleton}></div>
            <div className={styles.textLineSkeletonShort}></div>
            <div className={styles.textLineSkeleton}></div>
            <div className={styles.textLineSkeletonMedium}></div>
            <div className={styles.textLineSkeleton}></div>
            <div className={styles.textLineSkeletonShort}></div>
          </div>

          {/* Back Button Skeleton */}
          <div className={styles.backButtonSkeleton}>
            <div className={styles.backButton}></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export const BlogItemSkeleton = () => {
  return (
    <div className={styles.blogItemSkeleton}>
      {/* Image Skeleton */}
      <div className={styles.blogImageSkeleton}></div>
      
      {/* Category Skeleton */}
      <div className={styles.blogCategorySkeleton}>
        <div className={styles.categoryBadgeSkeleton}></div>
      </div>

      {/* Content Skeleton */}
      <div className={styles.blogContentSkeleton}>
        <div className={styles.blogTitleSkeleton}></div>
        <div className={styles.blogTextSkeleton}></div>
        <div className={styles.blogTextSkeleton}></div>
        <div className={styles.blogTextSkeletonShort}></div>
        
        <div className={styles.blogMetaSkeleton}>
          <div className={styles.blogDateSkeleton}></div>
          <div className={styles.blogReadMoreSkeleton}></div>
        </div>
      </div>
    </div>
  );
};
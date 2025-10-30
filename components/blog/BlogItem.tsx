'use client';
import Link from 'next/link';
import React, { useState, useEffect } from 'react';
import SocialShareButtons from './SocialShareButtons';
import styles from './BlogItem.module.css';

// Detect if text is Urdu or Arabic (RTL languages)
function isRTLText(text: string): boolean {
  if (!text) return false;
  const rtlRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
}

interface BlogItemProps {
  title: string;
  excerpt: string;
  categories?: Array<{ name: string }>;
  featuredImage?: {
    sourceUrl: string;
    altText?: string;
  };
  date: string;
  slug: string;
  index?: number;
}

const BlogItem: React.FC<BlogItemProps> = ({
  title,
  excerpt,
  categories,
  featuredImage,
  date,
  slug,
  index = 0
}) => {
  const [imageError, setImageError] = useState(false);
  const [imageLoading, setImageLoading] = useState(true);
  const [showSocialMenu, setShowSocialMenu] = useState(false);
  const [imageSrc, setImageSrc] = useState('');
  
  // Strip HTML tags from excerpt and limit length
  const cleanExcerpt = excerpt 
    ? excerpt.replace(/<[^>]*>/g, '').substring(0, 120) + '...'
    : 'Read more about this post...';
  
  // Get first category or default
  const category = categories && categories.length > 0 ? categories[0].name : 'General';
  
  // Format date
  const formattedDate = new Date(date).toLocaleDateString('en-US', {
    year: 'numeric',
    month: 'short',
    day: 'numeric'
  });

  // Detect language and text direction
  const isRTL = isRTLText(title);
  const excerptIsRTL = isRTLText(cleanExcerpt);

  useEffect(() => {
    if (featuredImage?.sourceUrl) {
      setImageSrc(featuredImage.sourceUrl);
      setImageLoading(true);
      setImageError(false);
    }
  }, [featuredImage?.sourceUrl]);

  const handleImageError = () => {
    setImageError(true);
    setImageLoading(false);
    setImageSrc('');
  };

  const handleImageLoad = () => {
    setImageLoading(false);
  };

  // Check if we should show image
  const shouldShowImage = imageSrc && !imageError;

  // LCP Optimization: First 3 images should be high priority
  const isLCPCandidate = index < 3;

  return (
    <div className={styles.card}>
      <Link href={`/posts/${slug}`}>
        <div className={styles.imageContainer}>
          {shouldShowImage ? (
            <>
              <img 
                src={imageSrc} 
                alt={featuredImage?.altText || title} 
                className={styles.image}
                onError={handleImageError}
                onLoad={handleImageLoad}
                loading={isLCPCandidate ? "eager" : "lazy"}
                decoding="async"
                fetchPriority={isLCPCandidate ? "high" : "auto"}
                width="328"
                height="272"
              />
              {imageLoading && (
                <div className={styles.imageLoading}>
                  <div className={styles.loadingText}>Loading...</div>
                </div>
              )}
            </>
          ) : (
            <div className={styles.imagePlaceholder}>
              <div className={styles.placeholderContent}>
                <svg className={styles.placeholderIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
                <p className={styles.placeholderText}>
                  {imageError ? 'Failed to load image' : 'No Image Available'}
                </p>
              </div>
            </div>
          )}
        </div>
      </Link>
      
      {/* Category and Social Share Row */}
      <div className={styles.headerRow}>
        <span className={styles.category}>
          {category}
        </span>
        
        {/* Minimal Social Share Button */}
        <div className={styles.socialShareContainer}>
          <button 
            className={styles.shareButton}
            onClick={() => setShowSocialMenu(!showSocialMenu)}
            aria-label="Share options"
            aria-expanded={showSocialMenu}
            aria-haspopup="true"
          >
            <svg className={styles.shareIcon} fill="currentColor" viewBox="0 0 24 24">
              <path d="M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92 1.61 0 2.92-1.31 2.92-2.92s-1.31-2.92-2.92-2.92z"/>
            </svg>
          </button>
          
          {/* Minimal Share Dropdown */}
          {showSocialMenu && (
            <div className={styles.shareDropdown}>
              <SocialShareButtons title={title} slug={slug} excerpt={cleanExcerpt} />
            </div>
          )}
        </div>
      </div>

      <div className={styles.content}>
        <Link href={`/posts/${slug}`}>
          <h3 
            className={`${styles.title} ${isRTL ? styles.rtlText : ''}`}
            dir={isRTL ? 'rtl' : 'ltr'}
          >
            {title}
          </h3>
        </Link>
        
        <p 
          className={`${styles.excerpt} ${excerptIsRTL ? styles.rtlText : ''}`}
          dir={excerptIsRTL ? 'rtl' : 'ltr'}
        >
          {cleanExcerpt}
        </p>
        
        <div className={styles.meta}>
          <span className={styles.date}>
            {formattedDate}
          </span>
          <Link 
            href={`/posts/${slug}`}
            className={styles.readMore}
            aria-label={`Read more about ${title}`}
          >
            Read More
            <svg className={styles.readMoreIcon} fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
            </svg>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogItem;
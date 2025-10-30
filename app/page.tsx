// app/page.tsx
'use client';
import { useState } from 'react';

// Simple Header Component
const Header = () => {
  const [isDark, setIsDark] = useState(false);

  return (
    <header style={{
      background: isDark ? '#000000' : 'linear-gradient(to bottom, #111827, #450a0a)',
      padding: '1.25rem 1rem',
      color: 'white'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Logo */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
          <a href="/" style={{ fontSize: '1.5rem', fontWeight: 'bold', textDecoration: 'none', color: 'white' }}>
            🕌 Al-Asr
          </a>
          
          {/* Navigation - Desktop */}
          <nav style={{ display: 'none', gap: '2rem', alignItems: 'center' }}>
            {['Home', 'Services', 'About', 'Contact'].map((item) => (
              <a key={item} href="#" style={{ 
                color: 'white', 
                textDecoration: 'none',
                padding: '0.5rem 1rem',
                borderRadius: '0.375rem',
                background: 'rgba(255,255,255,0.1)'
              }}>
                {item}
              </a>
            ))}
          </nav>
        </div>

        {/* Right Side Icons */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
          {/* Search Bar */}
          <div style={{
            display: 'flex',
            alignItems: 'center',
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '0.375rem',
            padding: '0.5rem'
          }}>
            <input 
              type="text" 
              placeholder="Search..."
              style={{
                background: 'transparent',
                border: 'none',
                color: 'white',
                outline: 'none',
                width: '150px'
              }}
            />
            <button style={{ background: 'none', border: 'none', color: 'white', cursor: 'pointer' }}>
              🔍
            </button>
          </div>

          {/* Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            style={{
              background: 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '0.375rem',
              padding: '0.5rem',
              color: 'white',
              cursor: 'pointer',
              width: '40px',
              height: '40px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            {isDark ? '🌙' : '☀️'}
          </button>

          {/* Mobile Menu Button */}
          <button style={{
            background: 'rgba(255,255,255,0.1)',
            border: '1px solid rgba(255,255,255,0.2)',
            borderRadius: '0.375rem',
            padding: '0.5rem',
            color: 'white',
            cursor: 'pointer',
            display: 'flex',
            flexDirection: 'column',
            gap: '3px'
          }}>
            <span style={{ width: '20px', height: '2px', background: 'white' }}></span>
            <span style={{ width: '20px', height: '2px', background: 'white' }}></span>
            <span style={{ width: '20px', height: '2px', background: 'white' }}></span>
          </button>
        </div>
      </div>
    </header>
  );
};

// Simple Hero Component
const HeroContent = ({ isDark = false }) => {
  return (
    <section style={{ 
      padding: '4rem 1rem', 
      background: isDark ? '#000000' : 'linear-gradient(to bottom, #111827, #450a0a)',
      textAlign: 'center',
      color: 'white'
    }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h1 style={{ 
          fontSize: '2.5rem', 
          fontWeight: '700', 
          marginBottom: '1rem',
          lineHeight: '1.2'
        }}>
          Al-Asr ( Islamic Service )
        </h1>
        <p style={{ 
          fontSize: '1.125rem', 
          opacity: 0.9, 
          marginBottom: '2rem',
          lineHeight: '1.6'
        }}>
          Islamic services, calendar events, and community programs. Stay updated with the latest from Al-Asr ( Islamic Service ).
        </p>
        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center', 
          flexWrap: 'wrap' 
        }}>
          {['📅 Islamic Calendar', '🕌 Services', '👥 Community'].map((badge, index) => (
            <span key={index} style={{ 
              background: 'rgba(255,255,255,0.1)', 
              padding: '0.75rem 1.5rem', 
              borderRadius: '0.5rem',
              border: '1px solid rgba(255,255,255,0.2)',
              fontSize: '0.9rem',
              fontWeight: '500'
            }}>
              {badge}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
};

// Simple MainContent Component with Cards
const MainContent = ({ isDark = false }) => {
  // Sample posts data
  const samplePosts = [
    {
      title: "Islamic Calendar 2024 - Important Dates",
      excerpt: "Complete Islamic calendar with all important dates, holidays, and events for the year 2024.",
      date: "2024-01-15",
      slug: "islamic-calendar-2024",
      category: "Calendar"
    },
    {
      title: "Friday Prayer Guidelines",
      excerpt: "Complete guide to Friday prayers including timings, requirements, and recommended practices.",
      date: "2024-01-10",
      slug: "friday-prayer-guidelines",
      category: "Prayer"
    },
    {
      title: "Community Events This Month",
      excerpt: "Join our community events including Quran classes, charity drives, and family gatherings.",
      date: "2024-01-05",
      slug: "community-events-month",
      category: "Community"
    },
    {
      title: "Understanding Zakat Calculation",
      excerpt: "Learn how to calculate Zakat properly with examples and common questions answered.",
      date: "2024-01-01",
      slug: "zakat-calculation-guide",
      category: "Zakat"
    },
    {
      title: "Ramadan Preparation Guide",
      excerpt: "Get ready for Ramadan with our comprehensive preparation guide for spiritual success.",
      date: "2023-12-20",
      slug: "ramadan-preparation-guide",
      category: "Ramadan"
    },
    {
      title: "Quran Learning Programs",
      excerpt: "Join our Quran learning programs for all ages and levels. Online and in-person classes available.",
      date: "2023-12-15",
      slug: "quran-learning-programs",
      category: "Education"
    }
  ];

  return (
    <main style={{
      padding: '4rem 1rem',
      background: isDark ? '#000000' : 'linear-gradient(to bottom, #fef2f2, white)',
      minHeight: '100vh',
      flex: '1'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Section Title */}
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            fontWeight: '700', 
            color: isDark ? 'white' : '#111827',
            marginBottom: '1rem'
          }}>
            Latest Articles & Updates
          </h2>
          <p style={{ 
            fontSize: '1.125rem', 
            color: isDark ? '#d1d5db' : '#6b7280',
            maxWidth: '600px',
            margin: '0 auto',
            lineHeight: '1.6'
          }}>
            Stay updated with the latest Islamic content, events, and community news from Al-Asr.
          </p>
        </div>

        {/* Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3rem'
        }}>
          {samplePosts.map((post, index) => (
            <div 
              key={index} 
              style={{
                background: isDark ? '#1f2937' : 'white',
                border: `1px solid ${isDark ? '#7f1d1d' : '#7f1d1d'}`,
                borderRadius: '0.5rem',
                padding: '1.5rem',
                transition: 'all 0.3s ease',
                cursor: 'pointer'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.transform = 'translateY(-5px)';
                e.currentTarget.style.boxShadow = '0 10px 25px rgba(0,0,0,0.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = 'none';
              }}
            >
              {/* Category */}
              <span style={{
                display: 'inline-block',
                background: '#7f1d1d',
                color: 'white',
                fontSize: '0.75rem',
                padding: '0.25rem 0.75rem',
                borderRadius: '9999px',
                fontWeight: '500',
                marginBottom: '1rem'
              }}>
                {post.category}
              </span>

              {/* Title */}
              <h3 style={{ 
                color: isDark ? 'white' : '#111827',
                marginBottom: '1rem',
                fontSize: '1.25rem',
                fontWeight: '600',
                lineHeight: '1.4',
                minHeight: '3.5rem'
              }}>
                {post.title}
              </h3>

              {/* Excerpt */}
              <p style={{ 
                color: isDark ? '#d1d5db' : '#6b7280',
                marginBottom: '1.5rem',
                lineHeight: '1.5',
                minHeight: '60px'
              }}>
                {post.excerpt}
              </p>

              {/* Meta Info */}
              <div style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                borderTop: `1px solid ${isDark ? '#374151' : '#e5e7eb'}`,
                paddingTop: '1rem'
              }}>
                <span style={{
                  color: isDark ? '#9ca3af' : '#6b7280',
                  fontSize: '0.875rem',
                  fontWeight: '500'
                }}>
                  {new Date(post.date).toLocaleDateString('en-US', {
                    year: 'numeric',
                    month: 'short',
                    day: 'numeric'
                  })}
                </span>
                <a 
                  href={`/posts/${post.slug}`} 
                  style={{
                    color: isDark ? '#fca5a5' : '#7f1d1d',
                    textDecoration: 'none',
                    fontWeight: '500',
                    fontSize: '0.875rem',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem'
                  }}
                >
                  Read More
                  <span>→</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div style={{ textAlign: 'center' }}>
          <button style={{
            padding: '0.75rem 2rem',
            background: '#7f1d1d',
            color: 'white',
            border: 'none',
            borderRadius: '0.5rem',
            fontSize: '1rem',
            fontWeight: '500',
            cursor: 'pointer',
            transition: 'all 0.2s'
          }}>
            Load More Articles
          </button>
        </div>
      </div>
    </main>
  );
};

// Simple Footer Component
const Footer = ({ isDark = false }) => {
  return (
    <footer style={{
      background: isDark ? '#000000' : 'linear-gradient(to bottom, #111827, #450a0a)',
      padding: '2rem 1rem',
      borderTop: '1px solid rgba(255, 255, 255, 0.1)',
      color: 'white',
      marginTop: 'auto'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center'
      }}>
        {/* Social Media Icons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          {['📘', '📷', '🐦', '📺'].map((icon, index) => (
            <a 
              key={index} 
              href="#" 
              style={{
                padding: '0.75rem',
                background: 'rgba(255, 255, 255, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.2)',
                borderRadius: '0.5rem',
                color: 'white',
                textDecoration: 'none',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '1.3rem',
                width: '50px',
                height: '50px',
                transition: 'all 0.2s'
              }}
              onMouseOver={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
                e.currentTarget.style.transform = 'scale(1.1)';
              }}
              onMouseOut={(e) => {
                e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
                e.currentTarget.style.transform = 'scale(1)';
              }}
            >
              {icon}
            </a>
          ))}
        </div>

        {/* Auth Buttons */}
        <div style={{ display: 'flex', gap: '1rem' }}>
          <a 
            href="/login" 
            style={{
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              borderRadius: '0.5rem',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              background: 'rgba(255, 255, 255, 0.1)',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.2)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = 'rgba(255, 255, 255, 0.1)';
            }}
          >
            Login
          </a>
          <a 
            href="/signup" 
            style={{
              padding: '0.75rem 2rem',
              textDecoration: 'none',
              background: '#dc2626',
              border: '1px solid #dc2626',
              borderRadius: '0.5rem',
              color: 'white',
              fontSize: '1rem',
              fontWeight: '500',
              transition: 'all 0.2s'
            }}
            onMouseOver={(e) => {
              e.currentTarget.style.background = '#b91c1c';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseOut={(e) => {
              e.currentTarget.style.background = '#dc2626';
              e.currentTarget.style.transform = 'scale(1)';
            }}
          >
            Sign Up
          </a>
        </div>
      </div>
    </footer>
  );
};

// Main Home Component
export default function Home() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      flexDirection: 'column' 
    }}>
      <Header />
      <HeroContent isDark={isDark} />
      <MainContent isDark={isDark} />
      <Footer isDark={isDark} />
    </div>
  );
}
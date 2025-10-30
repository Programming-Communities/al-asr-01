// lib/wordpress.ts - Fallback data ensure karein
export async function getPosts() {
  try {
    // Your existing WordPress code...
  } catch (error) {
    console.error('❌ Error fetching posts from WordPress:', error);
    
    // Return nice fallback data
    return [
      {
        id: '1',
        title: 'Welcome to Al-Asr Islamic Service',
        excerpt: '<p>Discover our comprehensive Islamic services, community programs, and spiritual guidance for Muslims worldwide.</p>',
        date: new Date().toISOString(),
        slug: 'welcome-to-al-asr',
        featuredImage: {
          node: {
            sourceUrl: '/images/default-post.jpg',
            altText: 'Al-Asr Islamic Center'
          }
        },
        categories: {
          nodes: [
            { name: 'Welcome', slug: 'welcome' }
          ]
        }
      },
      {
        id: '2', 
        title: 'Islamic Calendar 2025 - Important Dates',
        excerpt: '<p>Complete guide to Islamic dates, Ramadan, Eid celebrations, and Hajj schedule for the year 2025.</p>',
        date: new Date().toISOString(),
        slug: 'islamic-calendar-2025',
        featuredImage: {
          node: {
            sourceUrl: '/images/calendar.jpg',
            altText: 'Islamic Calendar'
          }
        },
        categories: {
          nodes: [
            { name: 'Calendar', slug: 'calendar' }
          ]
        }
      },
      {
        id: '3',
        title: 'Daily Prayer Times & Qibla Direction',
        excerpt: '<p>Accurate prayer times for your location with Qibla direction and mosque finder services.</p>',
        date: new Date().toISOString(),
        slug: 'prayer-times-guide',
        featuredImage: {
          node: {
            sourceUrl: '/images/prayer.jpg',
            altText: 'Prayer Times'
          }
        },
        categories: {
          nodes: [
            { name: 'Prayer', slug: 'prayer' }
          ]
        }
      }
    ];
  }
}
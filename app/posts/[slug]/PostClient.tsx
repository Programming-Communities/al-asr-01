// app/posts/[slug]/PostClient.tsx
'use client';
import Image from 'next/image';
import Link from 'next/link';
import Header from '@/components/mainlayout/Header';

// RTL Text Detection Function
function isRTLText(text: string): boolean {
  if (!text) return false;
  const rtlRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
}

interface PostClientProps {
  post: any;
  slug: string;
  isUrdu?: boolean;
}

export default function PostClient({ post, slug, isUrdu }: PostClientProps) {
  const currentIsRTL = isUrdu !== undefined ? isUrdu : isRTLText(post.title) || isRTLText(post.content);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900">
      <Header />
      
      <div className="py-8">
        <article 
          className="max-w-4xl mx-auto bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden"
          dir={currentIsRTL ? "rtl" : "ltr"}
        >
          {post.featuredImage?.node?.sourceUrl && (
            <div className="relative h-96 w-full">
              <Image
                src={post.featuredImage.node.sourceUrl}
                alt={post.featuredImage.node.altText || post.title}
                fill
                className="object-cover"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 80vw, 70vw"
              />
            </div>
          )}

          <div className="p-6 md:p-8">
            <h1 
              className={`text-3xl md:text-4xl font-bold text-gray-900 dark:text-white mb-6 leading-tight ${
                currentIsRTL ? 'text-right' : 'text-left'
              }`}
            >
              {post.title}
            </h1>

            <div 
              className={`wp-content max-w-none text-gray-700 dark:text-gray-300 ${
                currentIsRTL ? 'urdu-arabic-content' : 'english-content'
              }`}
              dangerouslySetInnerHTML={{ __html: post.content }}
            />

            <div className={`mt-8 pt-6 border-t border-gray-200 dark:border-gray-700 ${currentIsRTL ? 'text-right' : 'text-left'}`}>
              <Link
                href="/"
                className={`inline-flex items-center text-red-900 dark:text-red-400 hover:text-red-700 dark:hover:text-red-300 font-semibold transition-colors ${
                  currentIsRTL ? 'flex-row-reverse' : ''
                }`}
              >
                <svg 
                  className={`${currentIsRTL ? 'ml-2 rotate-180' : 'mr-2'} w-4 h-4`} 
                  fill="none" 
                  stroke="currentColor" 
                  viewBox="0 0 24 24"
                >
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
                </svg>
                Back to All Posts
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
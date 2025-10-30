import { GraphQLClient } from 'graphql-request';
import { Suspense } from 'react';
import PostClient from './PostClient'; // ✅ This should work if file exists
import { PostPageSkeleton } from '@/components/blog/SkeletonLoader';

const client = new GraphQLClient('https://admin-al-asr.centers.pk/graphql');

// RTL detection function
function isRTLText(text: string): boolean {
  if (!text) return false;
  const rtlRegex = /[\u0600-\u06FF\u0750-\u077F\u08A0-\u08FF\u0590-\u05FF\uFB50-\uFDFF\uFE70-\uFEFF]/;
  return rtlRegex.test(text);
}

async function getPost(slug: string) {
  const query = `
    query GetPost($slug: ID!) {
      post(id: $slug, idType: SLUG) {
        id 
        title 
        content 
        date
        excerpt
        featuredImage { 
          node { 
            sourceUrl 
            altText 
          } 
        }
        categories { 
          nodes { 
            name 
            slug 
          } 
        }
        author { 
          node { 
            name 
          } 
        }
      }
    }
  `;
  try {
    const data = await client.request(query, { slug });
    return data.post;
  } catch (error) {
    return null;
  }
}

async function PostContent({ slug }: { slug: string }) {
  const post = await getPost(slug);
  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 dark:bg-gray-900 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-red-600">Post Not Found</h1>
          <p className="text-gray-600 mt-2">The requested post could not be found.</p>
        </div>
      </div>
    );
  }

  // Better RTL detection - check both title and content
  const isTitleRTL = isRTLText(post.title);
  const isContentRTL = isRTLText(post.content);
  const isUrdu = isTitleRTL || isContentRTL;

  return <PostClient post={post} slug={slug} isUrdu={isUrdu} />;
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  return (
    <Suspense fallback={<PostPageSkeleton />}>
      <PostContent slug={slug} />
    </Suspense>
  );
}
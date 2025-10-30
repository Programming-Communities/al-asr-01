// lib/api.ts
export async function getPostBySlug(slug: string): Promise<Post | null> {
  try {
    // Replace this with your actual data fetching logic
    // This could be from a CMS, markdown files, database, etc.
    const posts: Post[] = []; // Your posts data here
    
    const post = posts.find(p => p.slug === slug);
    return post || null;
  } catch (error) {
    console.error('Error fetching post:', error);
    return null;
  }
}
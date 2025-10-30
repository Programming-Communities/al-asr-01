// components/blog/BlogList.tsx (Simple Version)
'use client';
import React from 'react';

const BlogList = ({ showTitle = true }: { showTitle?: boolean }) => {
  return (
    <div className="container mx-auto px-4">
      {/* Show title only if prop is true */}
      {showTitle && (
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white">
            Latest Posts
          </h2>
          <p className="text-gray-600 dark:text-gray-300 mt-2">
            Discover more Islamic content and events
          </p>
        </div>
      )}

      {/* Simple Message */}
      <div className="text-center py-16">
        <div className="bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded-lg p-8 max-w-md mx-auto">
          <svg className="w-16 h-16 text-yellow-500 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
          </svg>
          <h3 className="text-xl font-semibold text-yellow-800 dark:text-yellow-200 mb-2">
            Blog Content Loading
          </h3>
          <p className="text-yellow-700 dark:text-yellow-300">
            Blog posts will be displayed here once connected to WordPress.
          </p>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
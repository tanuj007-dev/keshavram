import React from 'react';
// Blog data structure matching the provided design and layout
const blogPosts = [
  {
    id: 1,
    category: "/ADVERTISING & MARKETING",
    date: "MARCH 1, 2026",
    title: "Marketing, campaigns, branding, and customer reach",
    description: "Insights into campaigns and reach that make marketing work for modern businesses.",
    image: "/Group - 1 of 6 (1).png"
  },
  {
    id: 2,
    category: "/BANK & FINANCIAL",
    date: "MARCH 3, 2026",
    title: "Banking, payments, documents, and finance support",
    description: "Understand how financial services, payments, and documentation support business growth.",
    image: "/Group - 2 of 5.png"
  },
  {
    id: 3,
    category: "/BOOKING & RENTAL",
    date: "MARCH 5, 2026",
    title: "Bookings, rentals, reservations, and vendor support",
    description: "Key insights on making booking and rental services smoother for users and vendors.",
    image: "/Group - 3 of 5.png"
  }
];
export default function LatestInsights() {
  return (
    <section className="w-full bg-white dark:bg-zinc-950 py-16 px-4 sm:px-6 lg:px-8 transition-colors duration-300">
      <div className="max-w-7xl mx-auto">
        {/* Upper Tag */}
        <span className="block text-xs md:text-sm font-semibold tracking-widest text-gray-500 dark:text-zinc-400 uppercase mb-3">
          OUR BLOGS
        </span>
        
        {/* Header with Title and "All Blog" Link */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 pb-6 border-b border-gray-200 dark:border-zinc-800">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-normal tracking-tight text-gray-900 dark:text-zinc-50 font-sans leading-tight">
            Latest Insights
          </h2>
          
          <a 
            href="#all-blogs" 
            className="inline-flex items-center gap-2 text-sm md:text-base font-medium text-gray-800 hover:text-black dark:text-zinc-200 dark:hover:text-white transition-colors duration-200 group-hover:underline"
          >
            <span>All Blog</span>
            <div className="w-8 h-8 rounded-full bg-emerald-800 dark:bg-emerald-700 flex items-center justify-center text-white transition-transform duration-300 group-hover:translate-x-1">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor" 
                className="w-4 h-4"
              >
                <path 
                  fillRule="evenodd" 
                  d="M3 10a.75.75 0 01.75-.75h10.638L10.23 5.29a.75.75 0 111.04-1.08l5.5 5.25a.75.75 0 010 1.08l-5.5 5.25a.75.75 0 11-1.04-1.08l4.158-3.97H3.75A.75.75 0 013 10z" 
                  clipRule="evenodd" 
                />
              </svg>
            </div>
          </a>
        </div>
        {/* Responsive Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-6 lg:gap-10 mt-10">
          {blogPosts.map((post) => (
            <article key={post.id} className="group flex flex-col">
              {/* Image Container with Zoom Effect */}
              <div className="overflow-hidden rounded-[24px] aspect-[4/3] bg-gray-100 dark:bg-zinc-900">
                <img 
                  src={post.image} 
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-105"
                  loading="lazy"
                  onError={(e) => {
                    // Fallback to beautiful color blocks if local image is not loaded
                    e.target.style.display = 'none';
                    e.target.parentNode.style.background = 'linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)';
                  }}
                />
              </div>
              {/* Metadata Section */}
              <div className="mt-5">
                <div className="flex items-center justify-between text-xs sm:text-sm font-semibold tracking-wider pb-3 border-b border-gray-200 dark:border-zinc-800">
                  {/* Category */}
                  <span className="text-gray-900 dark:text-zinc-100 uppercase">
                    {post.category}
                  </span>
                  {/* Date */}
                  <span className="text-gray-400 dark:text-zinc-500 font-normal">
                    {post.date}
                  </span>
                </div>
              </div>
              {/* Title */}
              <h3 className="mt-4 text-xl sm:text-2xl font-semibold text-gray-900 dark:text-zinc-50 leading-snug tracking-tight group-hover:text-emerald-800 dark:group-hover:text-emerald-500 transition-colors duration-200">
                <a href={`#post-${post.id}`}>
                  {post.title}
                </a>
              </h3>
              {/* Description */}
              <p className="mt-3 text-gray-600 dark:text-zinc-400 text-sm sm:text-base leading-relaxed line-clamp-3">
                {post.description}
              </p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

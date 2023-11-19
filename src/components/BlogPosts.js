// src/components/BlogPosts.js
import React from 'react';
import blogPostsData from '../data/blogPostsData.json';
import './BlogPosts.css';// Import the stylesheet for styling

const BlogPosts = () => {
  return (
    <div className="blog-container">
      <h2>Blog Posts</h2>
      <div className="timeline">
        {blogPostsData.map((post, index) => (
          <div key={index} className="post">
            <h3>{post.title}</h3>
            <p>{post.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogPosts;

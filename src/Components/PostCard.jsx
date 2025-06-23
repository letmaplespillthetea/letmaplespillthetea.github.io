import React from 'react';
import { Link } from 'react-router-dom';
import './PostCard.css'; 

const PostCard = ({ post }) => {
  return (
    <div className="postcard-container">
        <div className="postcard-content">
          <p className="postcard-label">
            {post.date
            ? new Date(post.date).toLocaleDateString('en-GB', {
                day: '2-digit',
                month: 'short',
                year: 'numeric',
              })
            : 'No date'}
            </p>
          <Link to={`/blog/${post.slug}`} className="postcard-link">
            <h2 className="postcard-title">{post.title}</h2>
          </Link>
          <p className="postcard-description">{post.description}</p>
      </div>

      {post.thumbnail && (
        <div className="postcard-thumbnail">
          <img src={post.thumbnail} alt={post.title} />
        </div>
      )}
    </div>
  );
};

export default PostCard;

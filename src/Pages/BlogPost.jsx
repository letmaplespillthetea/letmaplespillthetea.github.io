import posts from "../Posts/index.jsx";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { FastAverageColor } from "fast-average-color";
import "./BlogPost.css";
import { colord, extend } from "colord";
import a11yPlugin from 'colord/plugins/a11y'; 

extend([a11yPlugin]);

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find((p) => p.slug === slug);
  const [textColor, setTextColor] = useState("#000");

  if (!post) return <p>404 Not Found</p>;

  const Component = post.component;

  const getReadableTextColor = (bgHex) => {
    const whiteContrast = colord(bgHex).contrast("#ffffff"); 
    const blackContrast = colord(bgHex).contrast("#040720"); 

    return whiteContrast > blackContrast ? "#ffffff" : "#40720";
  };

 useEffect(() => {
    let isMounted = true;
    const fac = new FastAverageColor();
    const img = new Image();

    img.crossOrigin = "Anonymous"; 
    img.src = post.thumbnail;

    img.onload = () => {
      fac.getColorAsync(img)
        .then((color) => {
          if (!isMounted) return;

          const base = colord(color.hex);
          const light = base.lighten(0.3).toHex();
          const white = '#fff';
          const textColor = getReadableTextColor(color.hex);

          setTextColor(textColor);

          const gradient = `linear-gradient(135deg, ${light} 0%, ${white} 100%)`;

          console.log(gradient);

          document.documentElement.style.setProperty("--theme-bg", gradient);
          document.documentElement.style.setProperty("--main-color", light); 
          document.body.classList.add("custom-theme");
        })
        .catch(() => {
          if (!isMounted) return;
          document.documentElement.style.setProperty("--main-color", "#FFCCCB");
          document.body.classList.remove("custom-theme");
        });
    };

    return () => {
      isMounted = false;
      document.documentElement.style.setProperty("--main-color", "#FFCCCB");
      document.documentElement.style.setProperty("--theme-bg", "#FFCCCB");
      document.body.classList.remove("custom-theme");
    };
  }, [post.thumbnail]);

  return (
    <div className="blog-post-wrapper" style={{ color: textColor }}>
      <div className="blog-post-header">
        <div className="blog-post-image-container">
          <img src={post.thumbnail} alt="cover" className="blog-post-cover" />
        </div>
        <div className="blog-post-meta">
          <h1 className="blog-post-title">📝 {post.title}</h1>
          <div className="blog-post-info">
            <span className="blog-post-date">{post.date}</span>
            <span className="blog-post-author">{post.author}</span>
          </div>
          {post.subtitle && <p className="blog-post-subtitle">{post.subtitle}</p>}
          {post.source && (
            <p className="blog-post-source">
              Source:{" "}
              <a href={post.source} target="_blank" rel="noopener noreferrer">
                {post.source}
              </a>
            </p>
          )}
        </div>
      </div>

      <div className="blog-post-content prose">
        <Component />
      </div>
    </div>
  );
};

export default BlogPost;

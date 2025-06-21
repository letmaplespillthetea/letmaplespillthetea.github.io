import posts from '../Posts/index.jsx';
import { useParams } from 'react-router-dom';

const BlogPost = () => {
  const { slug } = useParams();
  const post = posts.find(p => p.slug === slug);

  if (!post) return <p>404 Not Found</p>;

  const Component = post.component;
  console.log(post.title);

  return (
    <div className="prose">
      <h1>{post.title}</h1>
      <Component />
    </div>
  );
};


export default BlogPost;

import posts from '../Posts/index.jsx';
import PostCard from '../Components/PostCard.jsx';

const Blogpage = () => (
  <div className="grid grid-cols-1 gap-12 px-4 py-10">
    {[...posts] 
      .sort((a, b) => new Date(b.date) - new Date(a.date)) 
      .map((post) => (
        <PostCard key={post.slug} post={post} />
      ))}
  </div>
);

export default Blogpage;

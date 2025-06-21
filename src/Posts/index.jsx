const allPostFiles = import.meta.glob('./*.mdx', { eager: true });

const posts = Object.entries(allPostFiles).map(([path, mod]) => {
  const slug = path.replace('./', '').replace(/\.mdx$/, '');

  return {
    title: mod.title,
    description: mod.description,
    thumbnail: mod.thumbnail,
    date: mod.date,
    slug,
    component: mod.default,
  };
});

export default posts;

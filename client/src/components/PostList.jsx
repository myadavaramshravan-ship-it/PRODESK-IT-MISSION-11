import PostCard from "./PostCard";

export default function PostList({ posts, fetchPosts }) {
  if (posts.length === 0) {
    return <p>No posts found.</p>;
  }

  return (
    <div className="post-list">
      {posts.map((post) => (
        <PostCard
          key={post._id}
          post={post}
          fetchPosts={fetchPosts}
        />
      ))}
    </div>
  );
}
export default function PostCard({ post, fetchPosts }) {
  const deletePost = async () => {
    try {
      await fetch(`/posts/${post._id}`, {
        method: "DELETE",
      });

      fetchPosts();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <article className="post-card">
      <div>
        <h2>{post.title}</h2>
        <p>{post.content}</p>
      </div>

      <div className="post-footer">
        {post.createdAt && (
          <span className="post-meta">
            {new Date(post.createdAt).toLocaleDateString()}
          </span>
        )}
        <button className="delete-button" onClick={deletePost}>
          Delete
        </button>
      </div>
    </article>
  );
}
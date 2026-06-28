import { useEffect, useState } from "react";
import PostForm from "../components/PostForm";
import PostList from "../components/PostList";

export default function Home() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const fetchPosts = async () => {
    try {
      setLoading(true);

      const API_URL = import.meta.env.VITE_API_URL;

      const response = await fetch(`${API_URL}/posts`);

      if (!response.ok) {
        throw new Error("Failed to fetch posts");
      }

      const data = await response.json();
      setPosts(data);
      setError("");
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPosts();
  }, []);

  return (
    <div className="app-container">
      <header className="app-header">
        <h1>Post Manager</h1>
      </header>

      <div className="main-content">
        <section className="form-panel">
          <div className="section-title">
            <h2>Add a post</h2>
            
          </div>
          <PostForm fetchPosts={fetchPosts} />
        </section>

        <section className="posts-panel">
          <div className="posts-header">
            <div>
              <h2>Recent posts</h2>
              <span className="posts-count">{posts.length} items</span>
            </div>
          </div>

          {loading && <p className="loading-message">Loading posts…</p>}

          {error && <p className="error-message">{error}</p>}

          {!loading && !error && (
            <PostList posts={posts} fetchPosts={fetchPosts} />
          )}
        </section>
      </div>
    </div>
  );
}
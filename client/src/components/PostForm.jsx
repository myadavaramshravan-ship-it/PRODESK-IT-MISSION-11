import { useState } from "react";

export default function PostForm({ fetchPosts }) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const API_URL = import.meta.env.VITE_API_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch(`${API_URL}/posts`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          title,
          content,
        }),
      });

      if (!response.ok) {
        throw new Error("Failed to add post");
      }

      setTitle("");
      setContent("");

      await fetchPosts();
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form className="post-form" onSubmit={handleSubmit}>
      <input
        className="post-input"
        type="text"
        placeholder="Enter title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <textarea
        className="post-textarea"
        placeholder="Enter content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button
        className="submit-button"
        type="submit"
        disabled={!title.trim() || !content.trim()}
      >
        Add Post
      </button>
    </form>
  );
}
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function CreatePost() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("Technology");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div style={{ maxWidth: "680px" }}>
      <h1 style={{ fontSize: "26px", fontWeight: 800, marginBottom: "20px" }}>
        Create New Post
      </h1>

      <form onSubmit={handleSubmit} className="admin-card">
        <div className="form-group">
          <label className="form-label">Post Title</label>
          <input
            type="text"
            className="form-input"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Category</label>
          <select
            className="form-select"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
          >
            <option value="Technology">Technology</option>
            <option value="Productivity">Productivity</option>
            <option value="Design">Design</option>
          </select>
        </div>

        <div className="form-group">
          <label className="form-label">Short Excerpt</label>
          <input
            type="text"
            className="form-input"
            value={excerpt}
            onChange={(e) => setExcerpt(e.target.value)}
            required
          />
        </div>

        <div className="form-group">
          <label className="form-label">Content</label>
          <textarea
            rows="6"
            className="form-textarea"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
        </div>

        <button type="submit" className="btn-primary">
          Publish Post
        </button>
      </form>
    </div>
  );
}

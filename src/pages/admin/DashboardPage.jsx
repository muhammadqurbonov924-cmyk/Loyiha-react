import { useState } from "react";
import { Link } from "react-router-dom";

const INITIAL_ADMIN_POSTS = [
  {
    id: 1,
    title: "The Future of Web Development",
    category: "Technology",
    date: "Nov 20, 2025",
  },
  {
    id: 2,
    title: "Mastering Productivity",
    category: "Productivity",
    date: "Nov 18, 2025",
  },
  {
    id: 3,
    title: "Design Principles That Matter",
    category: "Design",
    date: "Nov 15, 2025",
  },
];

export default function DashboardPage() {
  const [posts, setPosts] = useState(INITIAL_ADMIN_POSTS);

  const handleDelete = (id) => {
    setPosts((prev) => prev.filter((p) => p.id !== id));
  };

  return (
    <div>
      <div className="posts-header-row">
        <div>
          <h1 style={{ fontSize: "26px", fontWeight: 800 }}>Admin Dashboard</h1>
          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            Manage all your published blog posts
          </p>
        </div>
        <Link to="/admin/create-post" className="btn-primary">
          + New Post
        </Link>
      </div>

      <div className="admin-card">
        <table className="admin-table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Category</th>
              <th>Date</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {posts.map((post) => (
              <tr key={post.id}>
                <td style={{ fontWeight: 600 }}>{post.title}</td>
                <td>{post.category}</td>
                <td>{post.date}</td>
                <td style={{ display: "flex", gap: "12px" }}>
                  <Link
                    to={`/detail?id=${post.id}`}
                    style={{ color: "#5b3df5", fontWeight: 600 }}
                  >
                    View
                  </Link>
                  <button
                    type="button"
                    onClick={() => handleDelete(post.id)}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#ef4444",
                      fontWeight: 600,
                    }}
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

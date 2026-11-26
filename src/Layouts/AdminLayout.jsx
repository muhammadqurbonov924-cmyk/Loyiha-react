import { Link, NavLink, Outlet } from "react-router-dom";

export default function AdminLayout() {
  return (
    <div className="admin-shell">
      <aside className="admin-sidebar">
        <Link
          to="/"
          className="brand-logo"
          style={{ padding: "8px 14px", marginBottom: "16px" }}
        >
          Blogify Admin
        </Link>

        <NavLink
          to="/admin"
          end
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          Dashboard
        </NavLink>
        <NavLink
          to="/admin/create-post"
          className={({ isActive }) =>
            `admin-nav-item ${isActive ? "active" : ""}`
          }
        >
          + Create Post
        </NavLink>
        <Link to="/" className="admin-nav-item" style={{ marginTop: "auto" }}>
          ← Back to Site
        </Link>
      </aside>

      <main className="admin-main">
        <Outlet />
      </main>
    </div>
  );
}

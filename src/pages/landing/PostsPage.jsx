import { useState } from "react";
import { Link } from "react-router-dom";

const ALL_POSTS = [
  {
    id: 1,
    category: "Technology",
    date: "Nov 20, 2025",
    title: "The Future of Web Development",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development in 2024.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 2,
    category: "Productivity",
    date: "Nov 18, 2025",
    title: "Mastering Productivity",
    excerpt:
      "Proven strategies and tools to boost your productivity and achieve your goals faster.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 3,
    category: "Design",
    date: "Nov 15, 2025",
    title: "Design Principles That Matter",
    excerpt:
      "Essential design principles every creator should know to build stunning user experiences.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 4,
    category: "Technology",
    date: "Nov 12, 2025",
    title: "Building Scalable Applications",
    excerpt:
      "Learn how to architect and build applications that can scale to millions of users.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 5,
    category: "Productivity",
    date: "Nov 10, 2025",
    title: "The Art of Remote Work",
    excerpt:
      "Tips and best practices for thriving in a remote work environment.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
  },
  {
    id: 6,
    category: "Design",
    date: "Nov 8, 2025",
    title: "Color Theory in Digital Design",
    excerpt:
      "Understanding how color affects user perception and behavior in digital products.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
  },
];

const CATEGORIES = ["All", "Technology", "Productivity", "Design"];

function PostsPage() {
  const [search, setSearch] = useState("");
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredPosts = ALL_POSTS.filter((post) => {
    const matchesCategory =
      activeCategory === "All" || post.category === activeCategory;
    const matchesSearch =
      post.title.toLowerCase().includes(search.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(search.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div>
      <section className="explore-hero">
        <div className="container">
          <h1>Explore Our Posts</h1>
          <p>
            Discover amazing content from talented writers across various topics
          </p>
          <div className="search-box">
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <circle cx="11" cy="11" r="8" />
              <line x1="21" y1="21" x2="16.65" y2="16.65" />
            </svg>
            <input
              type="text"
              className="search-input"
              placeholder="Search posts..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
            />
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="filter-tabs-wrap">
            <div className="filter-tabs">
              {CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setActiveCategory(cat)}
                  className={`filter-tab ${activeCategory === cat ? "active" : ""}`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>

          <div className="posts-grid">
            {filteredPosts.map((post) => (
              <article key={post.id} className="post-card">
                <div className="post-card-img-wrap">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="post-card-img"
                  />
                  <span className="post-badge">{post.category}</span>
                </div>
                <div className="post-card-body">
                  <div className="post-meta">{post.date}</div>
                  <h3 className="post-card-title">{post.title}</h3>
                  <p className="post-card-excerpt">{post.excerpt}</p>
                  <Link to={`/detail?id=${post.id}`} className="read-more-link">
                    Read more →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default PostsPage;

import { Link } from "react-router-dom";

const LATEST_POSTS = [
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
];

function HomePage() {
  return (
    <div>
      <section className="hero-section">
        <div className="container hero-grid">
          <div>
            <h1 className="hero-title">
              Create, Read,
              <span>Inspire.</span>
            </h1>
            <p className="hero-subtitle">
              Discover stories written by amazing people. Share your knowledge
              and inspire others with your unique perspective.
            </p>
            <div className="hero-actions">
              <Link to="/posts" className="btn-primary">
                Explore Posts →
              </Link>
              <Link to="/login" className="btn-secondary">
                Get Started
              </Link>
            </div>
          </div>

          <div className="hero-mockup-card">
            <div className="mockup-browser-top">
              <div className="mockup-dots">
                <span />
                <span />
                <span />
              </div>
              <span
                style={{ fontSize: "12px", color: "#9ca3af", fontWeight: 600 }}
              >
                blogify.app
              </span>
            </div>
            <div className="mockup-body">
              <span className="mockup-badge">Modern Publishing</span>
              <h3
                style={{
                  fontSize: "20px",
                  fontWeight: 800,
                  marginBottom: "6px",
                }}
              >
                Share Your Stories
              </h3>
              <p style={{ fontSize: "13px", color: "#6b7280" }}>
                Write, publish, and grow your audience effortlessly.
              </p>
              <div className="mockup-bars">
                <div className="mockup-mini-card">
                  <div className="mockup-line short" />
                  <div className="mockup-line" />
                  <div className="mockup-line" style={{ width: "80%" }} />
                </div>
                <div className="mockup-mini-card">
                  <div className="mockup-line short" />
                  <div className="mockup-line" />
                  <div className="mockup-line" style={{ width: "70%" }} />
                </div>
                <div className="mockup-mini-card">
                  <div className="mockup-line short" />
                  <div className="mockup-line" />
                  <div className="mockup-line" style={{ width: "85%" }} />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-header-center">
            <h2 className="section-title">Why Choose Blogify?</h2>
            <p className="section-desc">
              Built with modern technologies and best practices to provide the
              best blogging experience.
            </p>
          </div>

          <div className="features-grid">
            <div className="feature-card">
              <div className="feature-icon">⚡</div>
              <h3>Fast</h3>
              <p>
                Lightning-fast performance with modern web technologies for the
                best reading experience.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">🛡️</div>
              <h3>Secure</h3>
              <p>
                Your data is protected with industry-standard security practices
                and encryption.
              </p>
            </div>

            <div className="feature-card">
              <div className="feature-icon">⚙️</div>
              <h3>Easy to Manage</h3>
              <p>
                Intuitive admin dashboard makes content management effortless
                and enjoyable.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section" style={{ paddingTop: "10px" }}>
        <div className="container">
          <div className="posts-header-row">
            <div>
              <h2 className="section-title" style={{ marginBottom: "6px" }}>
                Latest Posts
              </h2>
              <p className="section-desc">
                Check out our most recent articles.
              </p>
            </div>
            <Link to="/posts" className="btn-secondary">
              View All →
            </Link>
          </div>

          <div className="posts-grid">
            {LATEST_POSTS.map((post) => (
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

export default HomePage;

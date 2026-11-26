import { Link, useLocation } from "react-router-dom";

const POSTS_LIST = [
  {
    id: 1,
    category: "Technology",
    date: "Nov 20, 2025",
    author: "John Doe",
    title: "The Future of Web Development",
    excerpt:
      "Exploring the latest trends and technologies shaping the future of web development in 2024.",
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        id: "s1",
        heading: null,
        text: "The landscape of web development is constantly evolving, and 2024 promises to bring exciting new changes that will shape how we build and interact with web applications.",
      },
      {
        id: "s2",
        heading: "Modern Frameworks and Tools",
        text: "The rise of modern frameworks like React, Vue, and Svelte has revolutionized how developers approach building user interfaces.",
      },
      {
        id: "s3",
        heading: "Performance and User Experience",
        text: "Web performance has become more critical than ever. Users expect lightning-fast load times and smooth interactions.",
      },
      {
        id: "s4",
        heading: "The Rise of AI Integration",
        text: "Artificial intelligence is becoming increasingly integrated into web applications, from chatbots to personalization features.",
      },
      {
        id: "s5",
        heading: "Conclusion",
        text: "The future of web development is bright and full of possibilities.",
      },
    ],
  },
  {
    id: 2,
    category: "Productivity",
    date: "Nov 18, 2025",
    author: "Sarah Miller",
    title: "Mastering Productivity",
    excerpt:
      "Proven strategies and tools to boost your productivity and achieve your goals faster.",
    image:
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        id: "s6",
        heading: null,
        text: "Productivity isn't about doing more things—it's about doing the right things consistently without burning out.",
      },
      {
        id: "s7",
        heading: "Time Blocking & Deep Work",
        text: "Dedicate uninterrupted 90-minute blocks to your most demanding cognitive tasks.",
      },
    ],
  },
  {
    id: 3,
    category: "Design",
    date: "Nov 15, 2025",
    author: "Alex Rivera",
    title: "Design Principles That Matter",
    excerpt:
      "Essential design principles every creator should know to build stunning user experiences.",
    image:
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=1000&q=80",
    sections: [
      {
        id: "s8",
        heading: null,
        text: "Great design feels invisible. It guides the user effortlessly toward their goal while creating a memorable visual rhythm.",
      },
    ],
  },
];

function DetailPostPage() {
  const { search } = useLocation();
  const id = new URLSearchParams(search).get("id") || "1";
  const post =
    POSTS_LIST.find((p) => String(p.id) === String(id)) || POSTS_LIST[0];
  const relatedPosts = POSTS_LIST.filter((p) => p.id !== post.id).slice(0, 2);

  return (
    <div className="detail-container">
      <Link to="/posts" className="back-link">
        ← Back to Posts
      </Link>

      <div>
        <span className="detail-badge">{post.category}</span>
        <h1 className="detail-title">{post.title}</h1>
        <div className="detail-meta">
          <span>{post.author}</span>
          <span>{post.date}</span>
        </div>
        <img src={post.image} alt={post.title} className="detail-cover" />
        <div className="detail-content">
          {post.sections.map((section) => (
            <div key={section.id}>
              {section.heading && <h2>{section.heading}</h2>}
              <p>{section.text}</p>
            </div>
          ))}
        </div>
      </div>

      <section className="related-section">
        <h2 style={{ fontSize: "24px", fontWeight: 800 }}>Related Posts</h2>
        <div className="related-grid">
          {relatedPosts.map((rel) => (
            <article key={rel.id} className="post-card">
              <div className="post-card-img-wrap">
                <img
                  src={rel.image}
                  alt={rel.title}
                  className="post-card-img"
                />
                <span className="post-badge">{rel.category}</span>
              </div>
              <div className="post-card-body">
                <div className="post-meta">{rel.date}</div>
                <h3 className="post-card-title">{rel.title}</h3>
                <p className="post-card-excerpt">{rel.excerpt}</p>
                <Link to={`/detail?id=${rel.id}`} className="read-more-link">
                  Read more →
                </Link>
              </div>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
}

export default DetailPostPage;

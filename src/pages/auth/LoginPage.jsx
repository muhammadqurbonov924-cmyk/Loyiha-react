import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function LoginPage() {
  const [isSignUp, setIsSignUp] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/admin");
  };

  return (
    <div className="auth-split">
      <div className="auth-left">
        <div className="auth-left-inner">
          <Link to="/" className="brand-logo" style={{ marginBottom: "20px" }}>
            <svg
              width="22"
              height="22"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
              <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
            </svg>
            Blogify
          </Link>

          <div>
            <Link to="/" className="back-link" style={{ marginBottom: "8px" }}>
              ← Back to Home
            </Link>
          </div>

          <div className="auth-card">
            <h2>{isSignUp ? "Create Account" : "Welcome Back"}</h2>
            <p className="auth-card-sub">
              {isSignUp
                ? "Sign up to start writing and sharing stories"
                : "Enter your credentials to access your account"}
            </p>

            <form onSubmit={handleSubmit}>
              <div className="form-group">
                <label className="form-label">Email</label>
                <input
                  type="email"
                  className="form-input"
                  placeholder="name@example.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                />
              </div>

              <div className="form-group">
                <label className="form-label">Password</label>
                <input
                  type="password"
                  className="form-input"
                  placeholder="••••••••"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
              </div>

              <button
                type="submit"
                className="btn-primary"
                style={{ width: "100%" }}
              >
                {isSignUp ? "Sign Up" : "Login"}
              </button>
            </form>

            <div className="auth-switch">
              {isSignUp
                ? "Already have an account? "
                : "Don't have an account? "}
              <button type="button" onClick={() => setIsSignUp(!isSignUp)}>
                {isSignUp ? "Login" : "Sign up"}
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className="auth-right">
        <div className="auth-visual-box">
          <svg
            width="88"
            height="88"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2" />
            <path d="M7 11V7a5 5 0 0 1 10 0v4" />
          </svg>
        </div>
        <h3>Start Your Journey</h3>
        <p>Join thousands of creators sharing their stories on Blogify</p>
      </div>
    </div>
  );
}

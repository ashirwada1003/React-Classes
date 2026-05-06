import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { validateLogin } from "../utils/validation";

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    const msg = validateLogin(email, password);
    setError(msg);

    if (!msg) {
      navigate("/dashboard");
    }
  };

  return (
    <section className="auth-page">
      <div className="auth-card">
        <span className="eyebrow">Welcome back</span>
        <h1>Login to ClassHub</h1>
        <p>Enter your details to open your student dashboard.</p>

        <form onSubmit={handleSubmit}>
          <label>
            Email
            <input
              type="email"
              placeholder="name@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </label>

          <label>
            Password
            <input
              type="password"
              placeholder="Enter password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </label>

          {error && <p className="form-error">{error}</p>}

          <button className="primary-button full-button" type="submit">
            Login
          </button>
        </form>

        <p className="auth-note">
          New here? <Link to="/">Explore the home page</Link>
        </p>
      </div>
    </section>
  );
};

export default Login;

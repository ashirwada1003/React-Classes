import { Link } from "react-router-dom"

const Home = ()=>{
    return(
        <section className="home-page">
            <div className="hero-section">
                <div className="hero-copy">
                    <span className="eyebrow">Student workspace</span>
                    <h1>Manage classes, tasks, and progress in one simple place.</h1>
                    <p>
                        ClassHub gives your project a clear starting point, a proper login flow,
                        and a useful dashboard after users sign in.
                    </p>

                    <div className="hero-actions">
                        <Link className="primary-button" to="/login">Get started</Link>
                        <Link className="secondary-button" to="/about">Learn more</Link>
                    </div>
                </div>

                <div className="hero-panel" aria-label="Class progress summary">
                    <div className="panel-header">
                        <span>Today</span>
                        <strong>Overview</strong>
                    </div>
                    <div className="progress-ring">78%</div>
                    <div className="mini-list">
                        <span>React basics completed</span>
                        <span>2 assignments pending</span>
                        <span>Next class at 5:00 PM</span>
                    </div>
                </div>
            </div>

            <div className="section-heading">
                <span className="eyebrow">What to add</span>
                <h2>A standard flow for your app</h2>
            </div>

            <div className="feature-grid">
                <article className="feature-card">
                    <h3>Clean Home</h3>
                    <p>Show what the app does and guide visitors toward login.</p>
                </article>
                <article className="feature-card">
                    <h3>Login Page</h3>
                    <p>Validate users and send them to a focused dashboard.</p>
                </article>
                <article className="feature-card">
                    <h3>Dashboard</h3>
                    <p>Display progress, quick actions, upcoming work, and activity.</p>
                </article>
            </div>
        </section>
    )
}
export default Home

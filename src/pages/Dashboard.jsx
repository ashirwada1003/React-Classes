import { Link } from "react-router-dom";

const stats = [
  { label: "Active courses", value: "4" },
  { label: "Completed lessons", value: "18" },
  { label: "Pending tasks", value: "3" },
  { label: "Weekly progress", value: "78%" },
];

const tasks = [
  "Finish React Router practice",
  "Submit login form assignment",
  "Review component styling notes",
];

const activities = [
  "You completed JSX basics",
  "New assignment added to React class",
  "Profile details were updated",
];

const Dashboard = () => {
  return (
    <section className="dashboard-page">
      <div className="dashboard-header">
        <div>
          <span className="eyebrow">Dashboard</span>
          <h1>Welcome back, Ashii!</h1>
          <p>Here is a simple after-login area for your project.</p>
        </div>
        <Link className="primary-button" to="/contact">Ask for support</Link>
      </div>

      <div className="stats-grid">
        {stats.map((item) => (
          <article className="stat-card" key={item.label}>
            <span>{item.label}</span>
            <strong>{item.value}</strong>
          </article>
        ))}
      </div>

      <div className="dashboard-grid">
        <article className="dashboard-card">
          <h2>Upcoming tasks</h2>
          <ul className="task-list">
            {tasks.map((task) => (
              <li key={task}>
                <span className="check-dot"></span>
                {task}
              </li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card">
          <h2>Recent activity</h2>
          <ul className="activity-list">
            {activities.map((activity) => (
              <li key={activity}>{activity}</li>
            ))}
          </ul>
        </article>

        <article className="dashboard-card wide-card">
          <h2>Quick actions</h2>
          <div className="quick-actions">
            <button>View classes</button>
            <button>Upload work</button>
            <button>Edit profile</button>
          </div>
        </article>
      </div>
    </section>
  );
};

export default Dashboard;

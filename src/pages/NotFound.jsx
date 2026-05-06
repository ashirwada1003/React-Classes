import { Link } from "react-router-dom";

function NotFound() {
  return (
    <section className="content-page not-found">
      <h1>404 - Page Not Found</h1>
      <p>This page does not exist.</p>
      <Link className="primary-button" to="/">Go home</Link>
    </section>
  );
}

export default NotFound;

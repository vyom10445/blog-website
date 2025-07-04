import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar">
      <Link to="/" className="nav-link">
        Home
      </Link>
      <Link to="/add-blog" className="nav-link">
        Add Blog
      </Link>
      <Link to="/users" className="nav-link">
        Users
      </Link>
    </nav>
  );
}

export default Navbar;

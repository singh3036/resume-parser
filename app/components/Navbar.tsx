import { Link } from "react-router";

const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="text-gradient text-2xl font-bold">
        <p>ResuScan</p>
      </Link>
      <Link to="/upload" className="primary-button w-fit">
        <p>Upload Resume</p>
      </Link>
    </nav>
  );
};

export default Navbar;

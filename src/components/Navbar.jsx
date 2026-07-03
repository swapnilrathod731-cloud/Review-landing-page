import "./Navbar.css";

function Navbar() {
  return (
    <nav className="navbar">

      <div className="logo">
        <span className="logo-icon">➕</span>
        <h2>MediCare</h2>
      </div>

      <ul className="nav-links">
        <li><a href="#hero">Home</a></li>
        <li><a href="#clinic">About</a></li>
        <li><a href="#services">Services</a></li>
        <li><a href="#doctors">Doctors</a></li>
        <li><a href="#reviews">Reviews</a></li>
      </ul>

      <button className="nav-btn">
        Book Appointment
      </button>

    </nav>
  );
}

export default Navbar;
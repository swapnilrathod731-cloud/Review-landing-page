import "./Footer.css";

function Footer() {
  return (
    <footer className="footer">

      <div className="footer-left">
        <h2>🏥 MediCare+</h2>
        <p>Providing quality healthcare with experienced doctors.</p>
      </div>

      <div className="footer-right">
        <p>© 2026 MediCare. All Rights Reserved.</p>

        <div className="footer-links">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms</a>
          <a href="#">Contact</a>
        </div>
      </div>

    </footer>
  );
}

export default Footer;
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        <Link to="/" className="logo">
          <img src="/Logo.png" alt="G-Mindo's Electrical & Solar Installation Logo" />
          <div className="logo-text">
            <h1>G-MINDO'S</h1>
            <p>Electrical & Solar Installation</p>
          </div>
        </Link>
        <nav className="nav-menu">
          <Link to="/">Home</Link>
          <Link to="/services">Services</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <div className="emergency">
          <span className="emergency-phone">📞 24/7 Emergency: 060 753 7228</span>
        </div>
      </div>
    </header>
  );
}
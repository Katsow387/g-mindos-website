import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h3>G-MINDO'S</h3>
          <p>Electrical & Solar Installation Experts</p>
          <p>Quality work guaranteed | 24/7 Emergency Service</p>
        </div>
        
        <div className="footer-section">
          <h3>Contact Info</h3>
          <p><strong>Mindo Massingue</strong></p>
          <p>📱 WhatsApp: 060 753 7228</p>
          <p>📞 Phone: 084 533 1752</p>
          <p>✉️ massinguemindo4@gmail.com</p>
        </div>
        
        <div className="footer-section">
          <h3>Quick Links</h3>
          <p><Link to="/">Home</Link></p>
          <p><Link to="/services">Services</Link></p>
          <p><Link to="/contact">Contact</Link></p>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2026 G-Mindo's Electrical & Solar Installation. All rights reserved.</p>
      </div>
    </footer>
  );
}
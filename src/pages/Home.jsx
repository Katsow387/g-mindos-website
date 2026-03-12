import { Link } from 'react-router-dom';
import './Home.css';

// Background image from public folder
const electricianHero = "/Background.jpg";

export default function Home() {
  return (
    <div className="home">
      {/* Full Screen Electrician */}
      <section className="hero" style={{backgroundImage: `url(${electricianHero})`}}>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1>G-MINDO'S</h1>
          <p>Electrical & Solar Installation</p>
          <div className="hero-actions">
            <Link to="/contact" className="hero-btn">Get Quote</Link>
            <a href="tel:0607537228" className="hero-btn hero-btn-call">Call Now</a>
          </div>
        </div>
      </section>
    </div>
  );
}
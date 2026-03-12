import { Link } from 'react-router-dom';
import './Home.css';

const electricianHero = "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?w=1920&q=80";

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
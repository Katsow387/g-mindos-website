import { Link } from 'react-router-dom';
import './Services.css';

export default function Services() {
  const services = [
    {
      title: "Maintenance",
      icon: "⚡",
      description: "Regular electrical maintenance to ensure your systems run efficiently and safely. We check wiring, panels, and all electrical components.",
      features: [
        "Regular inspections",
        "Preventive maintenance",
        "System upgrades",
        "Safety checks"
      ]
    },
    {
      title: "Fault Finding",
      icon: "🔍",
      description: "Expert diagnosis and repair of electrical issues. We use advanced equipment to quickly identify and fix problems.",
      features: [
        "Circuit tracing",
        "Short circuit detection",
        "Power failure diagnosis",
        "Equipment testing"
      ]
    },
    {
      title: "Solar Installation",
      icon: "☀️",
      description: "Professional solar panel installation for homes and businesses. Save on electricity costs with renewable energy.",
      features: [
        "Panel installation",
        "Inverter setup",
        "Battery systems",
        "System maintenance"
      ]
    },
    {
      title: "Domestic Wiring",
      icon: "🏠",
      description: "Complete electrical wiring solutions for homes. New installations, renovations, and upgrades.",
      features: [
        "New home wiring",
        "Rewiring services",
        "Lighting installation",
        "Socket and switch installation"
      ]
    },
    {
      title: "Commercial Wiring",
      icon: "🏢",
      description: "Electrical solutions for businesses, offices, and commercial spaces. Compliant with all regulations.",
      features: [
        "Office wiring",
        "Shop fittings",
        "Data cabling",
        "Security system wiring"
      ]
    },
    {
      title: "Industrial Wiring",
      icon: "🏭",
      description: "Heavy-duty electrical installations for factories, warehouses, and industrial facilities.",
      features: [
        "3-phase power",
        "Motor connections",
        "Control panels",
        "Industrial lighting"
      ]
    }
  ];

  return (
    <div className="services-page">
      <div className="services-hero">
        <h1>Our Electrical & Solar Services</h1>
        <p>Professional solutions for every need - Domestic, Commercial & Industrial</p>
      </div>

      <div className="services-container">
        <div className="services-grid">
          {services.map((service, index) => (
            <div key={index} className="service-detailed-card">
              <div className="service-header">
                <span className="service-icon-large">{service.icon}</span>
                <h2>{service.title}</h2>
              </div>
              <p className="service-description">{service.description}</p>
              <ul className="service-features">
                {service.features.map((feature, i) => (
                  <li key={i}>{feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="services-cta">
        <h2>Need a Custom Solution?</h2>
        <p>Contact Mindo today for a free quote and consultation</p>
        <div className="cta-buttons">
          <Link to="/contact" className="cta-btn-primary">Get Free Quote</Link>
          <a href="tel:0607537228" className="cta-btn-secondary">Call Now: 060 753 7228</a>
        </div>
      </div>
    </div>
  );
}
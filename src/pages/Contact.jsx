import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import './Contact.css';

export default function Contact() {
  const form = useRef();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [message, setMessage] = useState('');

  const sendEmail = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setMessage('');
    
    emailjs.sendForm(
      'service_go87jkv',           // ✅ Your Service ID
      'template_3g2vu5g',          // ✅ Your Template ID
      form.current,
      'LVVn_GCkmnYjLuCMy'          // ✅ Your Public Key
    )
    .then(() => {
      setMessage('success');
      form.current.reset();
    })
    .catch((error) => {
      console.error('Email failed:', error);
      setMessage('error');
    })
    .finally(() => {
      setIsSubmitting(false);
      setTimeout(() => setMessage(''), 5000);
    });
  };

  return (
    <div className="contact-page">
      {/* Emergency Strip */}
      <div className="emergency-strip">
        <div className="container">
          <span className="emergency-icon">🚨</span>
          <span className="emergency-text">24/7 EMERGENCY SERVICE</span>
          <span className="emergency-number">📞 060 753 7228</span>
        </div>
      </div>

      <div className="contact-hero">
        <h1>Contact Us</h1>
        <p>Get in touch with G-Mindo's for all your electrical and solar needs</p>
      </div>

      <div className="contact-container">
        {/* Contact Information */}
        <div className="contact-info-section">
          <h2>Contact Information</h2>
          
          <div className="info-card main-contact">
            <h3>Mindo Massingue</h3>
            <div className="contact-detail">
              <span className="detail-icon">📱</span>
              <span className="detail-text">WhatsApp: <strong>060 753 7228</strong></span>
            </div>
            <div className="contact-detail">
              <span className="detail-icon">📞</span>
              <span className="detail-text">Phone: <strong>07845 331752</strong></span>
            </div>
            <div className="contact-detail">
              <span className="detail-icon">✉️</span>
              <span className="detail-text">Email: <strong>massinguemindo4@gmail.com</strong></span>
            </div>
          </div>
          
          <div className="info-card emergency-card">
            <div className="emergency-header">
              <span className="emergency-badge">24/7</span>
              <h3>Emergency Service</h3>
            </div>
            <div className="emergency-phone-large">
              <span className="phone-icon">📞</span>
              <span className="phone-number">060 753 7228</span>
            </div>
            <p className="emergency-note">Available 24/7 for electrical emergencies</p>
          </div>
        </div>

        {/* Contact Form */}
        <div className="contact-form-wrapper">
          <h2>Send us a Message</h2>
          
          {message === 'success' && (
            <div className="success-message">
              ✓ Thank you! We received your enquiry. Mindo will contact you soon.
            </div>
          )}
          
          {message === 'error' && (
            <div className="error-message">
              ✗ Failed to send. Please call our emergency line: 060 753 7228
            </div>
          )}

          <form ref={form} onSubmit={sendEmail} className="contact-form">
            <div className="form-group">
              <label>Your Name *</label>
              <input 
                type="text" 
                name="name" 
                placeholder="Enter your full name" 
                required 
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Email Address *</label>
              <input 
                type="email" 
                name="email" 
                placeholder="Enter your email address" 
                required 
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Phone Number</label>
              <input 
                type="tel" 
                name="phone" 
                placeholder="Enter your phone number" 
                disabled={isSubmitting}
              />
            </div>

            <div className="form-group">
              <label>Your Message *</label>
              <textarea 
                name="message" 
                rows="5" 
                placeholder="Tell us about your electrical or solar project..." 
                required 
                disabled={isSubmitting}
              ></textarea>
            </div>

            <button 
              type="submit" 
              className="submit-btn"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Sending...' : 'Send Message'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
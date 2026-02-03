import { Link } from 'react-router-dom';
import { 
  HiOutlineMail, 
  HiOutlinePhone, 
  HiOutlineLocationMarker,
  HiOutlineClock
} from 'react-icons/hi';
import { FaFacebookF, FaLinkedinIn, FaTwitter } from 'react-icons/fa';
import Logo from '../Logo/Logo';
import './Footer.css';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/industries', label: 'Industries' },
    { path: '/quote', label: 'Get a Quote' },
    { path: '/contact', label: 'Contact Us' },
  ];

  const services = [
    'Free Electronics Pickup',
    'Secure Data Wiping',
    'E-Waste Recycling',
    'On-Site Equipment Sorting',
    'Business Liquidation',
    'IT Asset Buyback',
  ];

  return (
    <footer className="footer">
      <div className="footer__main">
        <div className="container">
          <div className="footer__grid">
            {/* Company Info */}
            <div className="footer__column footer__column--brand">
              <Link to="/" className="footer__logo-link">
                <div className="footer__logo">
                  <span className="footer__logo-texas">TEXAS</span>
                  <span className="footer__logo-retech">RE-TECH</span>
                </div>
              </Link>
              <p className="footer__description">
                Secure IT asset disposal and data protection across Texas. 
                We provide compliant electronics recycling and document destruction 
                services for businesses of all sizes.
              </p>
              <div className="footer__social">
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <FaFacebookF />
                </a>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <FaLinkedinIn />
                </a>
                <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link">
                  <FaTwitter />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="footer__column">
              <h4 className="footer__heading">Quick Links</h4>
              <ul className="footer__links">
                {quickLinks.map((link) => (
                  <li key={link.path}>
                    <Link to={link.path} className="footer__link">
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div className="footer__column">
              <h4 className="footer__heading">Our Services</h4>
              <ul className="footer__links">
                {services.map((service) => (
                  <li key={service}>
                    <Link to="/services" className="footer__link">
                      {service}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div className="footer__column">
              <h4 className="footer__heading">Contact Us</h4>
              <ul className="footer__contact-list">
                <li className="footer__contact-item">
                  <HiOutlineLocationMarker className="footer__contact-icon" />
                  <span>Dallas-Fort Worth, Texas</span>
                </li>
                <li className="footer__contact-item">
                  <HiOutlinePhone className="footer__contact-icon" />
                  <a href="tel:972-469-2588">972-469-2588</a>
                </li>
                <li className="footer__contact-item">
                  <HiOutlineMail className="footer__contact-icon" />
                  <a href="mailto:contact@texasretech.com">contact@texasretech.com</a>
                </li>
                <li className="footer__contact-item">
                  <HiOutlineClock className="footer__contact-icon" />
                  <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-content">
          <p className="footer__copyright">
            &copy; {currentYear} Texas Re-Tech. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">Privacy Policy</Link>
            <Link to="/terms" className="footer__legal-link">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

import { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { HiMenu, HiX, HiOutlineMail, HiOutlinePhone } from 'react-icons/hi';
import Logo from '../Logo/Logo';
import Button from '../Button/Button';
import './Navbar.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/about', label: 'About Us' },
    { path: '/services', label: 'Services' },
    { path: '/how-it-works', label: 'How It Works' },
    { path: '/industries', label: 'Industries We Serve' },
    { path: '/quote', label: 'Get a Quote' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [location.pathname]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className={`navbar ${isScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__container">
        <Link to="/" className="navbar__logo">
          <Logo size={56} variant="full" />
        </Link>

        {/* Desktop Navigation */}
        <nav className="navbar__nav">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__link ${isActive ? 'navbar__link--active' : ''}`
                  }
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Contact Buttons */}
        <div className="navbar__actions">
          <a href="mailto:contact@texasretech.com" className="navbar__contact-btn">
            <HiOutlineMail />
            <span>contact@texasretech.com</span>
          </a>
          <a href="tel:972-469-2588" className="navbar__contact-btn navbar__contact-btn--phone">
            <HiOutlinePhone />
            <span>972-469-2588</span>
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="navbar__menu-btn"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          aria-expanded={isMenuOpen}
        >
          {isMenuOpen ? <HiX /> : <HiMenu />}
        </button>
      </div>

      {/* Mobile Navigation */}
      <div className={`navbar__mobile ${isMenuOpen ? 'navbar__mobile--open' : ''}`}>
        <nav className="navbar__mobile-nav">
          <ul className="navbar__mobile-links">
            {navLinks.map((link) => (
              <li key={link.path}>
                <NavLink
                  to={link.path}
                  className={({ isActive }) =>
                    `navbar__mobile-link ${isActive ? 'navbar__mobile-link--active' : ''}`
                  }
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
          </ul>
          <div className="navbar__mobile-actions">
            <a href="mailto:contact@texasretech.com" className="navbar__mobile-contact">
              <HiOutlineMail /> contact@texasretech.com
            </a>
            <a href="tel:972-469-2588" className="navbar__mobile-contact">
              <HiOutlinePhone /> 972-469-2588
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;

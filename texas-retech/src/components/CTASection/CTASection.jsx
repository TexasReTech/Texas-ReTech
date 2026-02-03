import Button from '../Button/Button';
import { HiPhone } from 'react-icons/hi';
import './CTASection.css';

const CTASection = ({
  description,
  primaryButtonText = 'Schedule Pickup Today',
  primaryButtonLink = '/quote',
  secondaryButtonText = 'Call Us 972-469-2588',
  secondaryButtonLink = 'tel:972-469-2588',
  showTruck = true,
}) => {
  return (
    <section className="cta-section">
      <div className="container cta-section__container">
        <div className="cta-section__content">
          {description && (
            <p className="cta-section__description">{description}</p>
          )}
          <div className="cta-section__buttons">
            <Button to={primaryButtonLink} variant="primary" size="large">
              {primaryButtonText}
            </Button>
            <Button
              href={secondaryButtonLink}
              variant="secondary"
              size="large"
              icon={<HiPhone />}
              iconPosition="left"
            >
              {secondaryButtonText}
            </Button>
          </div>
        </div>
        {showTruck && (
          <div className="cta-section__image">
            <div className="cta-section__truck">
              <img
                src="/images/truck.png"
                alt="Texas Re-Tech Recycling Truck"
                onError={(e) => {
                  e.target.onerror = null;
                  e.target.src = '';
                  e.target.parentElement.innerHTML = `
                    <div class="cta-section__truck-placeholder">
                      <svg viewBox="0 0 350 180" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect x="10" y="50" width="220" height="90" rx="4" fill="white" stroke="#e5e7eb" stroke-width="2"/>
                        <rect x="230" y="75" width="80" height="65" rx="4" fill="white" stroke="#e5e7eb" stroke-width="2"/>
                        <rect x="245" y="85" width="50" height="35" rx="2" fill="#f3f4f6"/>
                        <circle cx="60" cy="145" r="18" fill="#374151"/>
                        <circle cx="60" cy="145" r="8" fill="#9ca3af"/>
                        <circle cx="170" cy="145" r="18" fill="#374151"/>
                        <circle cx="170" cy="145" r="8" fill="#9ca3af"/>
                        <circle cx="280" cy="145" r="18" fill="#374151"/>
                        <circle cx="280" cy="145" r="8" fill="#9ca3af"/>
                        <text x="30" y="90" fill="#1a365d" font-size="18" font-weight="bold">TEXAS</text>
                        <text x="30" y="112" fill="#0F4CE4" font-size="16" font-weight="bold">RE-TECH</text>
                        <path d="M140 75 L180 75 L180 85 L165 95 L180 105 L180 115 L140 115 L155 95 Z" fill="#0F4CE4"/>
                      </svg>
                    </div>
                  `;
                }}
              />
            </div>
            <div className="cta-section__circle"></div>
          </div>
        )}
      </div>
    </section>
  );
};

export default CTASection;

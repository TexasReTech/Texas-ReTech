import { 
  CTASection, 
  Button 
} from '../../components';
import {
  TruckIcon,
  VerifiedIcon,
  BuildingIcon
} from '../../components/Icons';
import { HiArrowRight, HiCheckCircle, HiLocationMarker } from 'react-icons/hi';
import './ServiceAreas.css';

const ServiceAreas = () => {
  const activeLocations = [
    { 
      name: 'Dallas / Fort Worth', 
      description: 'Our headquarters and primary service area. Full coverage across the DFW Metroplex including Dallas, Fort Worth, Arlington, Plano, Irving, and surrounding cities.',
      cities: ['Dallas', 'Fort Worth', 'Arlington', 'Plano', 'Irving', 'Frisco', 'McKinney', 'Denton', 'Garland', 'Grand Prairie']
    },
    { 
      name: 'Austin', 
      description: 'Serving the Greater Austin area including Round Rock, Cedar Park, Georgetown, and the Texas Hill Country region.',
      cities: ['Austin', 'Round Rock', 'Cedar Park', 'Georgetown', 'Pflugerville', 'Leander', 'San Marcos']
    },
    { 
      name: 'Houston', 
      description: 'Complete coverage of the Houston metropolitan area, including The Woodlands, Sugar Land, Katy, and surrounding communities.',
      cities: ['Houston', 'The Woodlands', 'Sugar Land', 'Katy', 'Pearland', 'League City', 'Pasadena', 'Baytown']
    },
    { 
      name: 'San Antonio', 
      description: 'Serving the San Antonio metro area and surrounding communities in South Central Texas.',
      cities: ['San Antonio', 'New Braunfels', 'Boerne', 'Seguin', 'Schertz', 'Universal City']
    },
  ];

  const benefits = [
    {
      icon: <TruckIcon size={40} />,
      title: 'Free Pickup Service',
      description: 'No-cost pickup for qualifying volumes within our service areas.',
    },
    {
      icon: <VerifiedIcon size={40} />,
      title: 'Same-Week Scheduling',
      description: 'Fast turnaround with flexible scheduling to meet your needs.',
    },
    {
      icon: <BuildingIcon size={40} />,
      title: 'On-Site Services',
      description: 'Equipment sorting and data destruction available at your location.',
    },
  ];

  return (
    <main className="service-areas-page">
      {/* Hero Section */}
      <section className="service-areas-hero">
        <div className="service-areas-hero__background">
          <div className="service-areas-hero__shape"></div>
        </div>
        <div className="container service-areas-hero__container">
          <div className="service-areas-hero__content">
            <h1 className="service-areas-hero__title">Service Areas</h1>
            <p className="service-areas-hero__subtitle">
              Professional electronics recycling and IT asset disposal across Texas
            </p>
            <Button to="/quote" variant="secondary" size="large" icon={<HiArrowRight />}>
              Schedule a Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Current Service Areas */}
      <section className="service-areas-main section">
        <div className="container">
          <h2 className="section-title">Where We Currently Serve</h2>
          <p className="section-subtitle">
            Texas Re-Tech currently provides full-service electronics recycling and data destruction 
            in these four major Texas metropolitan areas.
          </p>
          
          <div className="service-areas-grid">
            {/* Map */}
            <div className="service-areas-map">
              <img 
                src="/images/texas-map.png" 
                alt="Texas Re-Tech Service Areas - Dallas, Fort Worth, Austin, San Antonio, Houston" 
                className="texas-map-image"
              />
            </div>

            {/* Location Cards */}
            <div className="service-areas-cards">
              {activeLocations.map((location, index) => (
                <div key={index} className="service-area-card">
                  <div className="service-area-card__header">
                    <HiLocationMarker className="service-area-card__icon" />
                    <h3 className="service-area-card__title">{location.name}</h3>
                  </div>
                  <p className="service-area-card__description">{location.description}</p>
                  <div className="service-area-card__cities">
                    <strong>Cities served:</strong>
                    <p>{location.cities.join(', ')}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="service-areas-benefits section bg-gray">
        <div className="container">
          <h2 className="section-title">What to Expect in Our Service Areas</h2>
          <div className="service-areas-benefits__grid">
            {benefits.map((benefit, index) => (
              <div key={index} className="benefit-card">
                <div className="benefit-card__icon">{benefit.icon}</div>
                <h3 className="benefit-card__title">{benefit.title}</h3>
                <p className="benefit-card__description">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expansion Notice */}
      <section className="service-areas-expansion section">
        <div className="container">
          <div className="expansion-notice">
            <div className="expansion-notice__content">
              <h2 className="expansion-notice__title">Expanding Across Texas</h2>
              <p className="expansion-notice__text">
                We are actively working to expand our services to cover all of Texas. 
                If you're located outside our current service areas, please contact us 
                to discuss options or to be notified when we expand to your area.
              </p>
              <div className="expansion-notice__features">
                <div className="expansion-feature">
                  <HiCheckCircle />
                  <span>More cities coming soon</span>
                </div>
                <div className="expansion-feature">
                  <HiCheckCircle />
                  <span>Join our waitlist for priority scheduling</span>
                </div>
                <div className="expansion-feature">
                  <HiCheckCircle />
                  <span>Custom solutions for large volumes outside service areas</span>
                </div>
              </div>
              <Button to="/quote" variant="primary" icon={<HiArrowRight />}>
                Contact Us About Your Location
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Located in one of our service areas? Schedule your free electronics pickup today and let Texas Re-Tech handle the rest."
        primaryButtonText="Schedule Pickup"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default ServiceAreas;

import { 
  CTASection, 
  Button 
} from '../../components';
import {
  ShieldIcon,
  VerifiedIcon,
  LeafIcon,
  HeartIcon,
  RecycleIcon,
  BuildingIcon
} from '../../components/Icons';
import { HiArrowRight } from 'react-icons/hi';
import './About.css';

const About = () => {
  const values = [
    {
      icon: <ShieldIcon size={48} />,
      title: 'Security First',
      description: 'Your data security is our top priority. Every device is handled with strict chain-of-custody protocols.',
    },
    {
      icon: <LeafIcon size={48} />,
      title: 'Environmental Responsibility',
      description: 'We ensure 100% of materials are processed responsibly, keeping e-waste out of landfills.',
    },
    {
      icon: <VerifiedIcon size={48} />,
      title: 'Transparency',
      description: 'Full documentation and tracking from pickup to final processing. No hidden steps.',
    },
    {
      icon: <HeartIcon size={48} />,
      title: 'Community Impact',
      description: 'Supporting local businesses and contributing to a cleaner Texas for future generations.',
    },
  ];

  const stats = [
    { number: '10,000+', label: 'Devices Recycled' },
    { number: '500+', label: 'Businesses Served' },
    { number: '100%', label: 'Data Destruction Rate' },
    { number: '0', label: 'Landfill Policy' },
  ];

  return (
    <main className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div className="about-hero__background">
          <div className="about-hero__shape"></div>
        </div>
        <div className="container about-hero__container">
          <div className="about-hero__content">
            <h1 className="about-hero__title">About Texas Re-Tech</h1>
            <p className="about-hero__subtitle">
              Secure IT Asset Disposal & Data Protection for Texas Businesses
            </p>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="about-mission section">
        <div className="container">
          <div className="about-mission__grid">
            <div className="about-mission__content">
              <h2 className="about-mission__title">Our Mission</h2>
              <p className="about-mission__text">
                Texas Re-Tech was founded with a simple mission: make electronics recycling 
                easy, secure, and accessible for businesses across Texas. We understand that 
                disposing of IT equipment isn't just about getting rid of old hardware—it's 
                about protecting sensitive data and doing right by the environment.
              </p>
              <p className="about-mission__text">
                Based in the Dallas-Fort Worth area, we provide compliant electronics recycling 
                and data destruction services that businesses can rely on. From small offices 
                to large enterprises, we handle everything from pickup to certified destruction.
              </p>
              <Button to="/quote" variant="primary" icon={<HiArrowRight />}>
                Schedule a Pickup
              </Button>
            </div>
            <div className="about-mission__image">
              <div className="about-mission__image-wrapper">
                <RecycleIcon size={200} />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="about-stats section bg-primary">
        <div className="container">
          <div className="about-stats__grid">
            {stats.map((stat, index) => (
              <div key={index} className="about-stat">
                <span className="about-stat__number">{stat.number}</span>
                <span className="about-stat__label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="about-values section">
        <div className="container">
          <h2 className="section-title">Our Core Values</h2>
          <p className="section-subtitle">
            Everything we do is guided by these principles. They're not just words—they're 
            how we operate every single day.
          </p>
          <div className="about-values__grid">
            {values.map((value, index) => (
              <div key={index} className="about-value-card">
                <div className="about-value-card__icon">{value.icon}</div>
                <h3 className="about-value-card__title">{value.title}</h3>
                <p className="about-value-card__description">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="about-why section bg-gray">
        <div className="container">
          <div className="about-why__grid">
            <div className="about-why__content">
              <h2 className="about-why__title">Why Texas Businesses Choose Us</h2>
              <ul className="about-why__list">
                <li>
                  <VerifiedIcon size={24} />
                  <div>
                    <strong>Certified & Compliant</strong>
                    <p>We follow R2 standards and EPA guidelines for responsible recycling.</p>
                  </div>
                </li>
                <li>
                  <ShieldIcon size={24} />
                  <div>
                    <strong>Secure Data Destruction</strong>
                    <p>DoD-grade data wiping with certificates for your compliance records.</p>
                  </div>
                </li>
                <li>
                  <BuildingIcon size={24} />
                  <div>
                    <strong>Built for Business</strong>
                    <p>We understand enterprise needs—HIPAA, FACTA, and industry compliance.</p>
                  </div>
                </li>
                <li>
                  <RecycleIcon size={24} />
                  <div>
                    <strong>Free Pickup Service</strong>
                    <p>No cost for qualified pickups. We come to you across Texas.</p>
                  </div>
                </li>
              </ul>
            </div>
            <div className="about-why__image">
              <img 
                src="/images/truck.png" 
                alt="Texas Re-Tech Truck"
                className="about-why__truck"
              />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Ready to responsibly recycle your electronics? Texas Re-Tech provides free pickup and secure data destruction for businesses across Texas."
        primaryButtonText="Get Started Today"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default About;

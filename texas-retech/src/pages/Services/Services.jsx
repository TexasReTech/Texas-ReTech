import { 
  CTASection, 
  Button 
} from '../../components';
import {
  ComputerIcon,
  LockIcon,
  TruckIcon,
  ClipboardIcon,
  BuildingIcon,
  VerifiedIcon,
  RecycleIcon,
  ShieldIcon,
  DocumentIcon
} from '../../components/Icons';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import './Services.css';

const Services = () => {
  const services = [
    {
      icon: <ComputerIcon size={56} />,
      title: 'Free Electronics Pickup',
      description: 'We remove your unwanted laptops, desktops, and office equipment at no cost. Fast, simple, and hassle-free.',
      features: [
        'Free pickup for qualifying volumes',
        'Scheduled at your convenience',
        'Professional handling and transport',
        'Chain-of-custody documentation',
      ],
    },
    {
      icon: <LockIcon size={56} />,
      title: 'Secure Data Wiping',
      description: 'Your sensitive data is erased to industry standards, with a Certificate of Data Destruction for your records.',
      features: [
        'DoD 5220.22-M compliant wiping',
        'Physical destruction available',
        'Certificates for compliance',
        'HIPAA & FACTA compliant',
      ],
    },
    {
      icon: <RecycleIcon size={56} />,
      title: 'Sustainable E-Waste Recycling',
      description: 'All electronics are processed safely and sustainably, keeping harmful materials out of landfills.',
      features: [
        'R2 certified processes',
        'Zero-landfill policy',
        'Responsible downstream recycling',
        'Environmental impact reports',
      ],
    },
    {
      icon: <ClipboardIcon size={56} />,
      title: 'On-Site Equipment Sorting',
      description: 'We handle all sorting, boxing, labeling, and preparation of equipment so your team doesn\'t lift a finger.',
      features: [
        'Complete on-site sorting',
        'Inventory documentation',
        'Asset tagging and tracking',
        'Minimal disruption to operations',
      ],
    },
    {
      icon: <BuildingIcon size={56} />,
      title: 'Business Equipment Liquidation',
      description: 'Complete clean-outs for offices, warehouses, and data centers—removing everything from IT gear to cables.',
      features: [
        'Full facility clean-outs',
        'Office relocations and closures',
        'Warehouse decommissioning',
        'Data center liquidation',
      ],
    },
    {
      icon: <VerifiedIcon size={56} />,
      title: 'Certified IT Asset Buyback',
      description: 'Cash payouts for laptops and devices with resale value—or free recycling for items that don\'t qualify.',
      features: [
        'Fair market value assessments',
        'Quick payment processing',
        'Detailed asset reports',
        'Combined with secure data wiping',
      ],
    },
  ];

  const processSteps = [
    { step: 1, title: 'Contact Us', description: 'Reach out via phone, email, or our online form.' },
    { step: 2, title: 'Schedule Pickup', description: 'Pick a date and time that works for you.' },
    { step: 3, title: 'We Collect', description: 'Our team arrives to pick up your equipment.' },
    { step: 4, title: 'Process & Certify', description: 'Receive certificates and documentation.' },
  ];

  return (
    <main className="services-page">
      {/* Hero Section */}
      <section className="services-hero">
        <div className="services-hero__background">
          <div className="services-hero__shape"></div>
        </div>
        <div className="container services-hero__container">
          <div className="services-hero__content">
            <h1 className="services-hero__title">Our Services</h1>
            <p className="services-hero__subtitle">
              Comprehensive electronics recycling and IT asset disposal solutions for Texas businesses
            </p>
            <Button to="/quote" variant="secondary" size="large" icon={<HiArrowRight />}>
              Get a Free Quote
            </Button>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="services-list section">
        <div className="container">
          <div className="services-list__grid">
            {services.map((service, index) => (
              <div key={index} className="service-detail-card">
                <div className="service-detail-card__header">
                  <div className="service-detail-card__icon">{service.icon}</div>
                  <h3 className="service-detail-card__title">{service.title}</h3>
                </div>
                <p className="service-detail-card__description">{service.description}</p>
                <ul className="service-detail-card__features">
                  {service.features.map((feature, idx) => (
                    <li key={idx}>
                      <HiCheckCircle className="service-detail-card__check" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works Mini Section */}
      <section className="services-process section bg-gray">
        <div className="container">
          <h2 className="section-title">How It Works</h2>
          <p className="section-subtitle">
            Getting started is easy. Here's our simple 4-step process.
          </p>
          <div className="services-process__steps">
            {processSteps.map((step, index) => (
              <div key={index} className="services-process__step">
                <div className="services-process__number">{step.step}</div>
                <h4>{step.title}</h4>
                <p>{step.description}</p>
              </div>
            ))}
          </div>
          <div className="services-process__cta">
            <Button to="/how-it-works" variant="outline" icon={<HiArrowRight />}>
              Learn More About Our Process
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Ready to get started? Contact Texas Re-Tech today for a free quote and schedule your electronics pickup."
        primaryButtonText="Schedule Pickup"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default Services;

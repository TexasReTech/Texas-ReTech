import { 
  CTASection, 
  Button 
} from '../../components';
import {
  HospitalIcon,
  BankIcon,
  SchoolIcon,
  GovernmentIcon,
  BuildingIcon,
  ServerIcon,
  StoreIcon,
  ShieldIcon,
  VerifiedIcon,
  LockIcon,
  DocumentIcon
} from '../../components/Icons';
import { HiArrowRight, HiCheckCircle } from 'react-icons/hi';
import './Industries.css';

const Industries = () => {
  const industries = [
    {
      icon: <HospitalIcon size={56} />,
      title: 'Healthcare & Medical',
      description: 'HIPAA-compliant data destruction for hospitals, clinics, medical offices, and healthcare providers.',
      compliance: ['HIPAA', 'HITECH'],
      features: [
        'PHI data protection',
        'Certificate of Destruction',
        'Secure chain of custody',
        'Compliance documentation',
      ],
    },
    {
      icon: <BankIcon size={56} />,
      title: 'Financial Institutions',
      description: 'Secure disposal for banks, credit unions, financial advisors, and insurance companies.',
      compliance: ['FACTA', 'GLBA', 'SOX'],
      features: [
        'Financial data security',
        'Audit-ready documentation',
        'Regulatory compliance',
        'Asset tracking reports',
      ],
    },
    {
      icon: <SchoolIcon size={56} />,
      title: 'Educational Institutions',
      description: 'Electronics recycling solutions for K-12 schools, universities, and educational organizations.',
      compliance: ['FERPA'],
      features: [
        'Student data protection',
        'Volume discounts',
        'Flexible scheduling',
        'Equipment buyback',
      ],
    },
    {
      icon: <GovernmentIcon size={56} />,
      title: 'Government Agencies',
      description: 'Compliant IT asset disposal for city, county, state, and federal government organizations.',
      compliance: ['NIST', 'FISMA'],
      features: [
        'Government-grade security',
        'Classified data handling',
        'Full audit trails',
        'Compliance verification',
      ],
    },
    {
      icon: <BuildingIcon size={56} />,
      title: 'Corporate & Enterprise',
      description: 'Scalable solutions for large corporations, headquarters, and multi-location businesses.',
      compliance: ['SOC 2', 'ISO 27001'],
      features: [
        'Enterprise-scale pickup',
        'Multi-location service',
        'Custom reporting',
        'Dedicated account manager',
      ],
    },
    {
      icon: <ServerIcon size={56} />,
      title: 'Data Centers',
      description: 'Complete decommissioning and secure disposal for data center equipment and infrastructure.',
      compliance: ['PCI DSS', 'SOC 2'],
      features: [
        'Server & storage disposal',
        'Network equipment',
        'Full facility clean-outs',
        'Physical destruction',
      ],
    },
    {
      icon: <StoreIcon size={56} />,
      title: 'Retail & Small Business',
      description: 'Cost-effective recycling solutions for retail stores, restaurants, and small businesses.',
      compliance: ['PCI DSS'],
      features: [
        'POS system disposal',
        'Free pickup available',
        'Quick turnaround',
        'Simple documentation',
      ],
    },
  ];

  const complianceInfo = [
    {
      icon: <LockIcon size={40} />,
      title: 'Data Security Standards',
      description: 'We follow DoD 5220.22-M wiping standards and offer physical destruction for maximum security.',
    },
    {
      icon: <DocumentIcon size={40} />,
      title: 'Compliance Documentation',
      description: 'Receive detailed certificates and reports for your compliance audits and records.',
    },
    {
      icon: <VerifiedIcon size={40} />,
      title: 'Industry Certifications',
      description: 'R2 certified processes ensure responsible recycling that meets regulatory requirements.',
    },
  ];

  return (
    <main className="industries-page">
      {/* Hero Section */}
      <section className="industries-hero">
        <div className="industries-hero__background">
          <div className="industries-hero__shape"></div>
        </div>
        <div className="container industries-hero__container">
          <div className="industries-hero__content">
            <h1 className="industries-hero__title">Industries We Serve</h1>
            <p className="industries-hero__subtitle">
              Specialized electronics recycling and data destruction for every industry
            </p>
          </div>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="industries-list section">
        <div className="container">
          <p className="industries-list__intro">
            Every industry has unique compliance requirements and security needs. Texas Re-Tech 
            provides tailored solutions to meet your specific regulatory obligations.
          </p>
          <div className="industries-list__grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card">
                <div className="industry-card__icon">{industry.icon}</div>
                <h3 className="industry-card__title">{industry.title}</h3>
                <p className="industry-card__description">{industry.description}</p>
                <div className="industry-card__compliance">
                  {industry.compliance.map((badge, idx) => (
                    <span key={idx} className="industry-card__badge">{badge}</span>
                  ))}
                </div>
                <ul className="industry-card__features">
                  {industry.features.map((feature, idx) => (
                    <li key={idx}>
                      <HiCheckCircle />
                      {feature}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="industries-compliance section bg-gray">
        <div className="container">
          <h2 className="section-title">Meeting Your Compliance Needs</h2>
          <p className="section-subtitle">
            We understand the importance of regulatory compliance. Our processes are designed 
            to help you meet your industry's specific requirements.
          </p>
          <div className="industries-compliance__grid">
            {complianceInfo.map((item, index) => (
              <div key={index} className="compliance-card">
                <div className="compliance-card__icon">{item.icon}</div>
                <h4 className="compliance-card__title">{item.title}</h4>
                <p className="compliance-card__description">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Custom Solutions */}
      <section className="industries-custom section">
        <div className="container">
          <div className="industries-custom__grid">
            <div className="industries-custom__content">
              <h2 className="industries-custom__title">Don't See Your Industry?</h2>
              <p className="industries-custom__text">
                We work with businesses of all types across Texas. Whether you're in 
                manufacturing, hospitality, legal services, or any other field, we can 
                create a custom solution that meets your needs.
              </p>
              <p className="industries-custom__text">
                Our team will work with you to understand your specific requirements, 
                compliance obligations, and volume needs to develop the right approach.
              </p>
              <Button to="/quote" variant="primary" size="large" icon={<HiArrowRight />}>
                Request a Custom Quote
              </Button>
            </div>
            <div className="industries-custom__image">
              <ShieldIcon size={200} />
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Ready to discuss your industry-specific needs? Contact Texas Re-Tech for a customized electronics recycling solution."
        primaryButtonText="Get Started"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default Industries;

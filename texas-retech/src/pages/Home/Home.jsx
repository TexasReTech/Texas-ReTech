import { Link } from 'react-router-dom';
import { HiArrowRight, HiOutlineCheckCircle } from 'react-icons/hi';
import { 
  ContactForm, 
  ProcessStep, 
  CTASection, 
  ServiceCard, 
  Button,
  ClipboardIcon,
  CalendarIcon,
  TruckIcon,
  DocumentIcon,
  ComputerIcon,
  LaptopIcon,
  MonitorIcon,
  PhoneIcon,
  PrinterIcon,
  CableIcon,
  SSDIcon,
  RouterIcon,
  MiscElectronicsIcon,
  ShieldIcon,
  VerifiedIcon,
  BuildingIcon,
  HandshakeIcon,
  LockIcon
} from '../../components';
import './Home.css';

const Home = () => {
  const processSteps = [
    {
      step: 1,
      icon: <ClipboardIcon size={40} />,
      title: 'Schedule a Pickup',
      description: 'Tell us what you need recycled and submit your pickup request online.',
    },
    {
      step: 2,
      icon: <CalendarIcon size={40} />,
      title: 'Date & Time',
      description: 'Pick a convenient day and time that works for your business or home.',
    },
    {
      step: 3,
      icon: <TruckIcon size={40} />,
      title: 'Pickup & Collection',
      description: 'We arrive to pick up your electronics and ensure secure transport to our processing facility.',
    },
    {
      step: 4,
      icon: <DocumentIcon size={40} />,
      title: 'Issued Certificate',
      description: 'Your devices are responsibly recycled, and a certificate is issued upon completion.',
    },
  ];

  const services = [
    {
      icon: <ComputerIcon size={48} />,
      title: 'Free Electronics Pickup',
      description: 'We remove your unwanted laptops, desktops, and office equipment at no cost. Fast, simple, and hassle-free.',
    },
    {
      icon: <LockIcon size={48} />,
      title: 'Secure Data Wiping',
      description: 'Your sensitive data is erased to industry standards, with a Certificate of Data Destruction for your records.',
    },
    {
      icon: <TruckIcon size={48} />,
      title: 'Sustainable E-Waste Recycling',
      description: 'All electronics are processed safely and sustainably, keeping harmful materials out of landfills.',
    },
    {
      icon: <ClipboardIcon size={48} />,
      title: 'On-Site Equipment Sorting',
      description: 'We handle all sorting, boxing, labeling, and preparation of equipment so your team doesn\'t lift a finger.',
    },
    {
      icon: <BuildingIcon size={48} />,
      title: 'Business Equipment Liquidation',
      description: 'Complete clean-outs for offices, warehouses, and data centers—removing everything from IT gear to cables.',
    },
    {
      icon: <VerifiedIcon size={48} />,
      title: 'Certified IT Asset Buyback',
      description: 'Cash payouts for laptops and devices with resale value — or free recycling for items that don\'t qualify.',
    },
  ];


  const acceptedMaterials = [
    { icon: <ComputerIcon size={36} />, title: 'Computers & Laptops', items: 'Desktops, Laptops, Servers' },
    { icon: <PrinterIcon size={36} />, title: 'Office Electronics', items: 'Printers, Scanners, Copiers' },
    { icon: <PhoneIcon size={36} />, title: 'Mobile Devices', items: 'Phones, Tablets, POS Systems' },
    { icon: <RouterIcon size={36} />, title: 'Networking Equipment', items: 'Routers, Switches, Firewalls' },
    { icon: <MonitorIcon size={36} />, title: 'Monitors & Displays', items: 'LCD, LED, Ultrawide' },
    { icon: <CableIcon size={36} />, title: 'Cables & Peripherals', items: 'Keyboards, Mice, Cords, Docks' },
    { icon: <SSDIcon size={36} />, title: 'Storage & Data Devices', items: 'Hard Drives, SSDs, USBs' },
    { icon: <MiscElectronicsIcon size={36} />, title: 'Misc. Electronics', items: 'Power Supplies, Adapters, Small Electronics' },
  ];

  const trustFeatures = [
    {
      icon: <LockIcon size={56} />,
      title: 'Data Comes First',
      description: 'Devices are handled with data security as the priority, ensuring sensitive information is protected before anything is recycled or resold.',
    },
    {
      icon: <VerifiedIcon size={56} />,
      title: 'Verified & Documented',
      description: 'Every load is tracked and handled properly, with documentation available so you know exactly where your equipment ends up.',
    },
    {
      icon: <BuildingIcon size={56} />,
      title: 'Built for Businesses',
      description: 'We work with offices, medical practices, schools, and warehouses that need reliable, repeatable electronics disposal — not one-off junk hauling.',
    },
    {
      icon: <HandshakeIcon size={56} />,
      title: 'Clear & Accountable',
      description: 'No runaround, no vague promises. Clear communication, clear process, and clear responsibility from pickup to final recycling.',
    },
  ];

  return (
    <main className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero__background">
          <div className="hero__wave"></div>
          {/* Blurry Texas shape */}
          <svg className="hero__texas-bg" viewBox="0 0 300 300" fill="white" xmlns="http://www.w3.org/2000/svg">
            <path d="M95 25 L200 25 L200 45 L240 45 L240 25 L270 25 L285 55 L285 85 L275 115 L260 140 L240 170 L215 205 L175 240 L140 255 L105 250 L75 225 L55 185 L45 145 L40 105 L45 65 L60 40 Z"/>
          </svg>
        </div>
        <div className="container hero__container">
          <div className="hero__content">
            <h1 className="hero__title">Texas Re-Tech</h1>
            <p className="hero__subtitle">
              Secure IT Asset Disposal & Data Protection Across Texas.
            </p>
          </div>
          <div className="hero__form-wrapper">
            <ContactForm variant="hero" buttonText="Schedule Free Pickup" />
          </div>
        </div>
      </section>

      {/* Recycling Process Section */}
      <section className="process section">
        <div className="container">
          <h2 className="section-title">The Recycling Process</h2>
          <p className="section-subtitle">
            We take e-waste seriously. See how Texas Re-Tech protects your data through a secure, transparent, end-to-end recycling process.
          </p>
          <div className="process__steps">
            {processSteps.map((step, index) => (
              <ProcessStep
                key={step.step}
                step={step.step}
                icon={step.icon}
                title={step.title}
                description={step.description}
                isLast={index === processSteps.length - 1}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Texas Re-Tech provides compliant electronics recycling and document destruction across Texas. Fast pickups, secure handling, and documented data protection businesses can rely on."
        primaryButtonText="Schedule Pickup Today"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={true}
      />

      {/* Services Section */}
      <section className="services section">
        <div className="container">
          <div className="services__header">
            <h2 className="services__title">Our Services</h2>
            <Button to="/services" variant="primary" icon={<HiArrowRight />}>
              More Services
            </Button>
          </div>
          <div className="services__grid">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                icon={service.icon}
                title={service.title}
                description={service.description}
                variant={index >= 3 ? 'bordered' : 'default'}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Our Locations Section */}
      <section className="locations section">
        <div className="container">
          <div className="locations__header">
            <h2 className="section-title">Our Locations</h2>
            <Button to="/service-areas" variant="primary" icon={<HiArrowRight />}>
              Check Availability in Your Area
            </Button>
          </div>
          <p className="locations__description">
            Texas Re-Tech currently serves four major metropolitan areas: Dallas/Fort Worth, Austin, Houston, and San Antonio. We provide free electronics pickup, secure data destruction, and certified recycling services throughout these regions. We're actively working to expand our coverage to serve all of Texas in the near future.
          </p>
          <div className="locations__map">
            <img 
              src="/images/texas-map.png" 
              alt="Texas Re-Tech Service Areas - Dallas, Fort Worth, Austin, San Antonio, Houston" 
              className="texas-map-image"
            />
          </div>
        </div>
      </section>

      {/* Accepted Materials Section */}
      <section className="materials section bg-gray">
        <div className="container">
          <div className="materials__header">
            <div>
              <h2 className="materials__title">Accepted Materials</h2>
              <p className="materials__subtitle">If it plugs in, powers on, or stored data – we probably take it.</p>
            </div>
            <Button to="/accepted-materials" variant="primary" icon={<HiArrowRight />}>
              View full accepted materials list
            </Button>
          </div>
          <div className="materials__grid">
            {acceptedMaterials.map((material, index) => (
              <div key={index} className="material-item">
                <div className="material-item__icon">{material.icon}</div>
                <div className="material-item__content">
                  <h3>{material.title}</h3>
                  <p>{material.items}</p>
                </div>
              </div>
            ))}
          </div>
          <p className="materials__disclaimer">
            *We do not accept household trash, appliances, or hazardous waste
          </p>
        </div>
      </section>

      {/* Secure Electronics Recycling Section */}
      <section className="trust section">
        <div className="container">
          <h2 className="section-title">Secure Electronics Recycling You Can Trust</h2>
          <p className="section-subtitle">
            We handle your electronics responsibly and securely at every step — from business pickup to final processing.
          </p>
          <div className="trust__grid">
            {trustFeatures.map((feature, index) => (
              <div key={index} className="trust-card">
                <div className="trust-card__icon">{feature.icon}</div>
                <div className="trust-card__content">
                  <h3>{feature.title}</h3>
                  <p>{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;

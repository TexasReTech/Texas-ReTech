import { 
  CTASection, 
  Button 
} from '../../components';
import {
  ComputerIcon,
  LaptopIcon,
  MonitorIcon,
  PhoneIcon,
  PrinterIcon,
  RouterIcon,
  CableIcon,
  SSDIcon,
  MiscElectronicsIcon,
  ServerIcon
} from '../../components/Icons';
import { HiArrowRight, HiCheckCircle, HiXCircle } from 'react-icons/hi';
import './AcceptedMaterials.css';

const AcceptedMaterials = () => {
  const acceptedCategories = [
    {
      icon: <ComputerIcon size={48} />,
      title: 'Desktop Computers',
      description: 'All brands and models of desktop computers, workstations, and tower PCs.',
      items: [
        'Dell, HP, Lenovo, Apple desktops',
        'Custom-built PCs',
        'All-in-one computers',
        'Workstations (CAD, video editing)',
        'Thin clients',
        'Mini PCs and NUCs'
      ]
    },
    {
      icon: <LaptopIcon size={48} />,
      title: 'Laptops & Notebooks',
      description: 'Portable computers of all sizes, brands, and conditions.',
      items: [
        'Business laptops (Dell, HP, Lenovo)',
        'MacBooks (all models)',
        'Chromebooks',
        'Gaming laptops',
        'Ultrabooks and 2-in-1s',
        'Broken or damaged laptops'
      ]
    },
    {
      icon: <ServerIcon size={48} />,
      title: 'Servers & Data Center Equipment',
      description: 'Enterprise-grade hardware and data center infrastructure.',
      items: [
        'Rack-mount servers',
        'Tower servers',
        'Blade servers',
        'Server racks and enclosures',
        'UPS systems (batteries must be intact)',
        'PDUs and power distribution'
      ]
    },
    {
      icon: <MonitorIcon size={48} />,
      title: 'Monitors & Displays',
      description: 'LCD and LED monitors of all sizes. Note: We do NOT accept large TVs.',
      items: [
        'LCD monitors (all sizes)',
        'LED monitors',
        'Ultrawide displays',
        'Touch screen monitors',
        'Digital signage displays (small)',
        'Portable monitors'
      ],
      note: 'Large TVs (32" and above) are NOT accepted due to space constraints.'
    },
    {
      icon: <PrinterIcon size={48} />,
      title: 'Office Electronics',
      description: 'Printers, scanners, and general office equipment.',
      items: [
        'Inkjet and laser printers',
        'Multifunction printers (MFPs)',
        'Scanners (flatbed and sheet-fed)',
        'Fax machines',
        'Copiers (small to medium)',
        'Label printers and receipt printers'
      ]
    },
    {
      icon: <PhoneIcon size={48} />,
      title: 'Mobile Devices',
      description: 'Smartphones, tablets, and handheld electronics.',
      items: [
        'iPhones and Android phones',
        'iPads and Android tablets',
        'E-readers (Kindle, Nook)',
        'Smartwatches and wearables',
        'MP3 players and iPods',
        'Handheld gaming devices'
      ]
    },
    {
      icon: <RouterIcon size={48} />,
      title: 'Networking Equipment',
      description: 'Network infrastructure and connectivity hardware.',
      items: [
        'Routers and modems',
        'Network switches (managed/unmanaged)',
        'Firewalls and security appliances',
        'Wireless access points',
        'Network interface cards',
        'Patch panels and racks'
      ]
    },
    {
      icon: <SSDIcon size={48} />,
      title: 'Storage & Data Devices',
      description: 'All types of data storage media and devices.',
      items: [
        'Hard drives (HDD) - all sizes',
        'Solid state drives (SSD)',
        'USB flash drives',
        'External hard drives',
        'Memory cards (SD, microSD)',
        'Tape drives and media'
      ]
    },
    {
      icon: <CableIcon size={48} />,
      title: 'Cables & Peripherals',
      description: 'Input devices, cables, and computer accessories.',
      items: [
        'Keyboards and mice',
        'Power cables and adapters',
        'USB cables and hubs',
        'HDMI, DisplayPort, VGA cables',
        'Webcams and microphones',
        'Docking stations'
      ]
    },
    {
      icon: <MiscElectronicsIcon size={48} />,
      title: 'Miscellaneous Electronics',
      description: 'Other electronic items and components we accept.',
      items: [
        'Power supplies (desktop/laptop)',
        'Graphics cards and components',
        'RAM and memory modules',
        'Circuit boards and PCBs',
        'POS systems and terminals',
        'Small consumer electronics'
      ]
    }
  ];

  const notAccepted = [
    'Large TVs (32" and above)',
    'Household appliances (refrigerators, washers, etc.)',
    'Extremely heavy HVAC equipment (standard units accepted)',
    'Hazardous materials and chemicals',
    'Medical equipment with biohazard contamination',
    'Household trash or non-electronic waste',
    'CRT monitors and CRT TVs',
    'Batteries not attached to devices'
  ];

  return (
    <main className="materials-page">
      {/* Hero Section */}
      <section className="materials-hero">
        <div className="materials-hero__background">
          <div className="materials-hero__shape"></div>
        </div>
        <div className="container materials-hero__container">
          <div className="materials-hero__content">
            <h1 className="materials-hero__title">Accepted Materials</h1>
            <p className="materials-hero__subtitle">
              Complete list of electronics and IT equipment we recycle
            </p>
            <p className="materials-hero__tagline">
              If it plugs in, powers on, or stored data — we probably take it.
            </p>
            <Button to="/quote" variant="secondary" size="large" icon={<HiArrowRight />}>
              Schedule Free Pickup
            </Button>
          </div>
        </div>
      </section>

      {/* Materials Grid */}
      <section className="materials-list section">
        <div className="container">
          <h2 className="section-title">What We Accept</h2>
          <p className="section-subtitle">
            Texas Re-Tech accepts a wide range of electronics for responsible recycling 
            and certified data destruction. Browse our categories below.
          </p>
          
          <div className="materials-grid">
            {acceptedCategories.map((category, index) => (
              <div key={index} className="material-category-card">
                <div className="material-category-card__header">
                  <div className="material-category-card__icon">{category.icon}</div>
                  <h3 className="material-category-card__title">{category.title}</h3>
                </div>
                <p className="material-category-card__description">{category.description}</p>
                <ul className="material-category-card__items">
                  {category.items.map((item, idx) => (
                    <li key={idx}>
                      <HiCheckCircle className="item-check" />
                      {item}
                    </li>
                  ))}
                </ul>
                {category.note && (
                  <div className="material-category-card__note">
                    <HiXCircle className="note-icon" />
                    <span>{category.note}</span>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Not Accepted Section */}
      <section className="not-accepted section bg-gray">
        <div className="container">
          <div className="not-accepted__content">
            <h2 className="not-accepted__title">Items We Cannot Accept</h2>
            <p className="not-accepted__subtitle">
              Due to space constraints, safety regulations, and processing limitations, 
              we are unable to accept the following items:
            </p>
            <div className="not-accepted__grid">
              {notAccepted.map((item, index) => (
                <div key={index} className="not-accepted__item">
                  <HiXCircle className="not-accepted__icon" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <p className="not-accepted__note">
              Have questions about a specific item? Contact us and we'll let you know 
              if we can accept it.
            </p>
          </div>
        </div>
      </section>

      {/* Data Security Notice */}
      <section className="data-security section">
        <div className="container">
          <div className="data-security__content">
            <h2 className="data-security__title">Your Data is Safe With Us</h2>
            <p className="data-security__text">
              All storage devices and data-bearing equipment undergo secure data destruction 
              following DoD 5220.22-M standards. You'll receive a Certificate of Data Destruction 
              for your compliance records.
            </p>
            <div className="data-security__features">
              <div className="security-feature">
                <HiCheckCircle />
                <span>DoD-grade data wiping</span>
              </div>
              <div className="security-feature">
                <HiCheckCircle />
                <span>Physical destruction available</span>
              </div>
              <div className="security-feature">
                <HiCheckCircle />
                <span>Certificates of destruction</span>
              </div>
              <div className="security-feature">
                <HiCheckCircle />
                <span>HIPAA & FACTA compliant</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Ready to recycle your electronics responsibly? Schedule a free pickup and we'll take care of everything from collection to certified destruction."
        primaryButtonText="Schedule Pickup"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default AcceptedMaterials;

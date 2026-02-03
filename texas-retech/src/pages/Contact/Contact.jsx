import { 
  ContactForm,
  Button 
} from '../../components';
import {
  PhoneIcon,
  ClipboardIcon,
  CalendarIcon,
  TruckIcon
} from '../../components/Icons';
import { 
  HiOutlinePhone, 
  HiOutlineMail, 
  HiOutlineLocationMarker,
  HiOutlineClock 
} from 'react-icons/hi';
import './Contact.css';

const Contact = () => {
  const reasons = [
    {
      icon: <ClipboardIcon size={40} />,
      title: 'Free Pickup',
      description: 'No cost for qualifying business pickups',
    },
    {
      icon: <CalendarIcon size={40} />,
      title: 'Flexible Scheduling',
      description: 'Choose a date and time that works for you',
    },
    {
      icon: <TruckIcon size={40} />,
      title: 'We Handle Everything',
      description: 'Our team does all the heavy lifting',
    },
  ];

  return (
    <main className="contact-page">
      {/* Hero Section */}
      <section className="contact-hero">
        <div className="contact-hero__background">
          <div className="contact-hero__shape"></div>
        </div>
        <div className="container contact-hero__container">
          <div className="contact-hero__content">
            <h1 className="contact-hero__title">Get a Free Quote</h1>
            <p className="contact-hero__subtitle">
              Schedule your free electronics pickup today. Fill out the form and we'll 
              respond within 24 hours.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="contact-form-section section">
        <div className="container">
          <div className="contact-form-section__grid">
            {/* Form */}
            <div className="contact-form-section__form">
              <h2>Request a Pickup</h2>
              <p>Tell us about your electronics recycling needs and we'll get back to you with a quote.</p>
              <ContactForm 
                variant="default" 
                buttonText="Schedule Free Pickup"
              />
            </div>

            {/* Contact Info Sidebar */}
            <div className="contact-form-section__sidebar">
              <div className="contact-info-card">
                <h3>Contact Information</h3>
                <ul className="contact-info-list">
                  <li>
                    <HiOutlinePhone className="contact-info-icon" />
                    <div>
                      <strong>Phone</strong>
                      <a href="tel:972-469-2588">972-469-2588</a>
                    </div>
                  </li>
                  <li>
                    <HiOutlineMail className="contact-info-icon" />
                    <div>
                      <strong>Email</strong>
                      <a href="mailto:contact@texasretech.com">contact@texasretech.com</a>
                    </div>
                  </li>
                  <li>
                    <HiOutlineLocationMarker className="contact-info-icon" />
                    <div>
                      <strong>Service Area</strong>
                      <span>Dallas-Fort Worth & Texas</span>
                    </div>
                  </li>
                  <li>
                    <HiOutlineClock className="contact-info-icon" />
                    <div>
                      <strong>Business Hours</strong>
                      <span>Mon - Fri: 8:00 AM - 5:00 PM</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div className="contact-reasons-card">
                <h3>Why Choose Texas Re-Tech?</h3>
                <ul className="contact-reasons-list">
                  {reasons.map((reason, index) => (
                    <li key={index}>
                      <div className="contact-reason-icon">{reason.icon}</div>
                      <div>
                        <strong>{reason.title}</strong>
                        <span>{reason.description}</span>
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Contact Banner */}
      <section className="contact-quick section bg-primary">
        <div className="container">
          <div className="contact-quick__content">
            <h2>Need Immediate Assistance?</h2>
            <p>Call us directly for same-day quotes and urgent pickup requests.</p>
            <a href="tel:972-469-2588" className="contact-quick__phone">
              <HiOutlinePhone />
              972-469-2588
            </a>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="contact-faq section">
        <div className="container">
          <h2 className="section-title">Common Questions</h2>
          <div className="contact-faq__grid">
            <div className="contact-faq__item">
              <h4>What items do you accept?</h4>
              <p>We accept computers, laptops, servers, monitors, printers, phones, tablets, networking equipment, cables, and most electronics. Contact us if you're unsure about specific items.</p>
            </div>
            <div className="contact-faq__item">
              <h4>Is pickup really free?</h4>
              <p>Yes! For businesses with reasonable volumes (10+ items), pickup is completely free. For smaller quantities, we may charge a minimal service fee or combine pickups.</p>
            </div>
            <div className="contact-faq__item">
              <h4>How quickly can you pick up?</h4>
              <p>We typically schedule pickups within 1-2 weeks. For urgent needs, same-week or next-day service may be available. Call us to discuss rush requests.</p>
            </div>
            <div className="contact-faq__item">
              <h4>Do you provide documentation?</h4>
              <p>Absolutely. You'll receive a pickup manifest, Certificate of Data Destruction, and asset disposition report for your compliance records.</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;

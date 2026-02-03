import { 
  CTASection, 
  ProcessStep,
  Button 
} from '../../components';
import {
  ClipboardIcon,
  CalendarIcon,
  TruckIcon,
  DocumentIcon,
  QuestionIcon,
  ShieldIcon,
  VerifiedIcon,
  RecycleIcon
} from '../../components/Icons';
import { HiArrowRight, HiChevronDown, HiChevronUp } from 'react-icons/hi';
import { useState } from 'react';
import './HowItWorks.css';

const HowItWorks = () => {
  const [openFaq, setOpenFaq] = useState(null);

  const processSteps = [
    {
      step: 1,
      icon: <ClipboardIcon size={48} />,
      title: 'Schedule a Pickup',
      description: 'Tell us what you need recycled and submit your pickup request online, by phone, or email. We\'ll respond within 24 hours to confirm details.',
      details: [
        'Fill out our simple online form',
        'Or call us at 972-469-2588',
        'Describe your equipment and volume',
        'We\'ll provide a quote if applicable',
      ],
    },
    {
      step: 2,
      icon: <CalendarIcon size={48} />,
      title: 'Confirm Date & Time',
      description: 'Pick a convenient day and time that works for your business or home. We offer flexible scheduling including same-week pickups for urgent needs.',
      details: [
        'Choose a date that works for you',
        'Morning or afternoon time slots',
        'Same-week service available',
        'Reschedule easily if needed',
      ],
    },
    {
      step: 3,
      icon: <TruckIcon size={48} />,
      title: 'Pickup & Collection',
      description: 'Our professional team arrives at your location to pick up your electronics. We handle all the heavy lifting and ensure secure transport.',
      details: [
        'Our team handles all equipment',
        'On-site sorting if needed',
        'Secure chain-of-custody',
        'No work required from your team',
      ],
    },
    {
      step: 4,
      icon: <DocumentIcon size={48} />,
      title: 'Certificate Issued',
      description: 'Your devices are responsibly recycled with secure data destruction. You receive a Certificate of Data Destruction for your compliance records.',
      details: [
        'Data securely wiped or destroyed',
        'Certificate of Destruction provided',
        'Detailed asset disposition report',
        'Compliance documentation available',
      ],
    },
  ];

  const faqs = [
    {
      question: 'How long does the pickup process take?',
      answer: 'Most pickups take 30-60 minutes depending on volume. For larger clean-outs, we\'ll provide a time estimate in advance. Our team works efficiently to minimize disruption to your business.',
    },
    {
      question: 'Is there a minimum quantity for pickup?',
      answer: 'We recommend at least 10-15 items for a free pickup. For smaller quantities, we may charge a minimal service fee, or you can combine with other businesses. Contact us to discuss your specific situation.',
    },
    {
      question: 'What happens to my data?',
      answer: 'All data-bearing devices undergo our secure data destruction process. We use DoD 5220.22-M compliant wiping methods, and physical destruction is available for highly sensitive devices. You\'ll receive a Certificate of Data Destruction.',
    },
    {
      question: 'Do you pay for equipment?',
      answer: 'Yes! Our IT Asset Buyback program pays fair market value for laptops and devices with resale value. We\'ll assess your equipment and provide a quote. Items without resale value are recycled at no cost.',
    },
    {
      question: 'What certifications do you have?',
      answer: 'Texas Re-Tech follows R2 (Responsible Recycling) standards and EPA guidelines. We maintain compliance with HIPAA, FACTA, and other data protection regulations for healthcare, financial, and government clients.',
    },
    {
      question: 'What areas do you serve?',
      answer: 'We serve the entire Dallas-Fort Worth metroplex and surrounding areas. For large volume pickups, we can arrange service throughout Texas. Contact us to confirm service in your location.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenFaq(openFaq === index ? null : index);
  };

  return (
    <main className="how-it-works-page">
      {/* Hero Section */}
      <section className="hiw-hero">
        <div className="hiw-hero__background">
          <div className="hiw-hero__shape"></div>
        </div>
        <div className="container hiw-hero__container">
          <div className="hiw-hero__content">
            <h1 className="hiw-hero__title">How It Works</h1>
            <p className="hiw-hero__subtitle">
              Our simple 4-step process makes electronics recycling easy and hassle-free
            </p>
          </div>
        </div>
      </section>

      {/* Process Steps */}
      <section className="hiw-process section">
        <div className="container">
          <div className="hiw-process__timeline">
            {processSteps.map((step, index) => (
              <div key={index} className="hiw-step">
                <div className="hiw-step__icon-container">
                  <div className="hiw-step__icon">{step.icon}</div>
                  {index < processSteps.length - 1 && (
                    <div className="hiw-step__line"></div>
                  )}
                </div>
                <div className="hiw-step__content">
                  <div className="hiw-step__number">Step {step.step}</div>
                  <h3 className="hiw-step__title">{step.title}</h3>
                  <p className="hiw-step__description">{step.description}</p>
                  <ul className="hiw-step__details">
                    {step.details.map((detail, idx) => (
                      <li key={idx}>
                        <VerifiedIcon size={18} />
                        {detail}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What to Expect Section */}
      <section className="hiw-expect section bg-gray">
        <div className="container">
          <h2 className="section-title">What to Expect</h2>
          <p className="section-subtitle">
            From first contact to final certificate, here's what you can expect when working with Texas Re-Tech
          </p>
          <div className="hiw-expect__grid">
            <div className="hiw-expect__card">
              <ShieldIcon size={48} />
              <h4>Professional Service</h4>
              <p>Our trained team arrives on time, in uniform, with proper equipment to handle your electronics safely.</p>
            </div>
            <div className="hiw-expect__card">
              <RecycleIcon size={48} />
              <h4>Responsible Handling</h4>
              <p>Every item is tracked and processed according to R2 standards. Nothing ends up in a landfill.</p>
            </div>
            <div className="hiw-expect__card">
              <DocumentIcon size={48} />
              <h4>Full Documentation</h4>
              <p>Receive detailed reports including pickup manifests, data destruction certificates, and recycling summaries.</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="hiw-faq section">
        <div className="container">
          <h2 className="section-title">Frequently Asked Questions</h2>
          <p className="section-subtitle">
            Have questions? We've got answers. If you don't see your question here, contact us directly.
          </p>
          <div className="hiw-faq__list">
            {faqs.map((faq, index) => (
              <div 
                key={index} 
                className={`hiw-faq__item ${openFaq === index ? 'hiw-faq__item--open' : ''}`}
              >
                <button 
                  className="hiw-faq__question"
                  onClick={() => toggleFaq(index)}
                >
                  <span>{faq.question}</span>
                  {openFaq === index ? <HiChevronUp /> : <HiChevronDown />}
                </button>
                <div className="hiw-faq__answer">
                  <p>{faq.answer}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="hiw-faq__cta">
            <p>Still have questions?</p>
            <Button to="/contact" variant="primary" icon={<HiArrowRight />}>
              Contact Us
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <CTASection
        description="Ready to get started? Schedule your free electronics pickup today and experience our hassle-free process."
        primaryButtonText="Schedule Pickup Now"
        primaryButtonLink="/quote"
        secondaryButtonText="Call Us 972-469-2588"
        secondaryButtonLink="tel:972-469-2588"
        showTruck={false}
      />
    </main>
  );
};

export default HowItWorks;

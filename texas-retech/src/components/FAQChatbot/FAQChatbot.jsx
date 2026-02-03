import { useState } from 'react';
import { HiChat, HiX, HiArrowRight } from 'react-icons/hi';
import { Link } from 'react-router-dom';
import './FAQChatbot.css';

const FAQChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedQuestion, setSelectedQuestion] = useState(null);

  const faqs = [
    {
      id: 1,
      question: 'What items do you accept?',
      answer:
        'We accept a wide range of electronics including computers, laptops, servers, monitors, printers, phones, tablets, networking equipment, cables, and more. We also handle office equipment, data center equipment, and industrial electronics. Contact us if you have specific items to confirm.',
    },
    {
      id: 2,
      question: 'How do I schedule a pickup?',
      answer:
        'Scheduling is easy! You can fill out our online form on the Get a Quote page, call us directly at 972-469-2588, or email contact@texasretech.com. We typically respond within 24 hours and can arrange pickup at your convenience.',
    },
    {
      id: 3,
      question: 'Is data wiping included?',
      answer:
        'Yes! Secure data destruction is included with our recycling services at no extra cost. We use industry-standard wiping methods (DoD 5220.22-M) and provide a Certificate of Data Destruction for your records and compliance needs.',
    },
    {
      id: 4,
      question: 'What certifications do you have?',
      answer:
        'Texas Re-Tech follows R2 (Responsible Recycling) standards and EPA guidelines for e-waste handling. We also maintain compliance with HIPAA, FACTA, and other data protection regulations for healthcare and financial clients.',
    },
    {
      id: 5,
      question: 'What areas do you serve?',
      answer:
        'We serve the entire Dallas-Fort Worth metroplex and surrounding areas across Texas. For large volume pickups, we can arrange service throughout Texas. Contact us to confirm service in your specific location.',
    },
    {
      id: 6,
      question: 'How much does it cost?',
      answer:
        'Our electronics pickup service is FREE for businesses with reasonable volumes of equipment. For very small quantities, there may be a minimal fee. We also offer IT Asset Buyback where we pay YOU for equipment with resale value. Request a quote for specific pricing.',
    },
    {
      id: 7,
      question: 'Do you buy back equipment?',
      answer:
        'Yes! Our IT Asset Buyback program pays fair market value for laptops, computers, and devices that have resale value. We\'ll assess your equipment and provide a quote. Items without resale value are recycled at no cost to you.',
    },
    {
      id: 8,
      question: 'How long does the process take?',
      answer:
        'We typically schedule pickups within 1-2 weeks of your request. The actual pickup usually takes 30-60 minutes depending on volume. You\'ll receive your Certificate of Destruction within 2-3 business days after processing.',
    },
  ];

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setSelectedQuestion(null);
  };

  const handleQuestionClick = (faq) => {
    setSelectedQuestion(faq);
  };

  const handleBack = () => {
    setSelectedQuestion(null);
  };

  return (
    <div className="chatbot">
      {/* Chat Window */}
      <div className={`chatbot__window ${isOpen ? 'chatbot__window--open' : ''}`}>
        <div className="chatbot__header">
          <div className="chatbot__header-info">
            <div className="chatbot__avatar">
              <img 
                src="/images/logo.png" 
                alt="Texas Re-Tech" 
                className="chatbot__avatar-logo"
              />
            </div>
            <div>
              <h4 className="chatbot__title">Texas Re-Tech</h4>
              <span className="chatbot__status">FAQ Assistant</span>
            </div>
          </div>
          <button className="chatbot__close" onClick={toggleChat} aria-label="Close chat">
            <HiX />
          </button>
        </div>

        <div className="chatbot__body">
          {selectedQuestion ? (
            <div className="chatbot__answer-view">
              <button className="chatbot__back" onClick={handleBack}>
                ← Back to questions
              </button>
              <div className="chatbot__message chatbot__message--user">
                {selectedQuestion.question}
              </div>
              <div className="chatbot__message chatbot__message--bot">
                {selectedQuestion.answer}
              </div>
            </div>
          ) : (
            <>
              <div className="chatbot__welcome">
                <div className="chatbot__message chatbot__message--bot">
                  Hi there! I'm here to help answer your questions about our e-waste recycling services. Click a question below or contact us directly.
                </div>
              </div>
              <div className="chatbot__questions">
                {faqs.map((faq) => (
                  <button
                    key={faq.id}
                    className="chatbot__question"
                    onClick={() => handleQuestionClick(faq)}
                  >
                    {faq.question}
                    <HiArrowRight className="chatbot__question-arrow" />
                  </button>
                ))}
              </div>
            </>
          )}
        </div>

        <div className="chatbot__footer">
          <p>Need more help?</p>
          <div className="chatbot__footer-links">
            <Link to="/quote" className="chatbot__contact-link" onClick={toggleChat}>
              Get a Quote
            </Link>
            <a href="tel:972-469-2588" className="chatbot__contact-link chatbot__contact-link--phone">
              Call 972-469-2588
            </a>
          </div>
        </div>
      </div>

      {/* Toggle Button */}
      <button
        className={`chatbot__toggle ${isOpen ? 'chatbot__toggle--open' : ''}`}
        onClick={toggleChat}
        aria-label="Toggle chat"
      >
        {isOpen ? <HiX /> : <HiChat />}
      </button>
    </div>
  );
};

export default FAQChatbot;

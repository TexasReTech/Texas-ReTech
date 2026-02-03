import { useState } from 'react';
import Button from '../Button/Button';
import './ContactForm.css';

const ContactForm = ({ 
  variant = 'default', // 'default', 'hero', 'sidebar'
  buttonText = 'Submit',
  onSubmit,
}) => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    businessType: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null);

  const businessTypes = [
    'I am a business',
    'Healthcare / Medical',
    'Financial Institution',
    'Educational Institution',
    'Government Agency',
    'Corporate / Enterprise',
    'Small Business',
    'Residential',
    'Other',
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      // Simulate form submission
      await new Promise(resolve => setTimeout(resolve, 1000));
      
      if (onSubmit) {
        await onSubmit(formData);
      }
      
      setSubmitStatus('success');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        businessType: '',
        message: '',
      });
    } catch {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <form 
      className={`contact-form contact-form--${variant}`} 
      onSubmit={handleSubmit}
    >
      <div className="contact-form__row">
        <div className="contact-form__field">
          <input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={formData.firstName}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__field">
          <input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
      </div>

      <div className="contact-form__row">
        <div className="contact-form__field">
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
            className="contact-form__input"
          />
        </div>
        <div className="contact-form__field">
          <input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={formData.phone}
            onChange={handleChange}
            className="contact-form__input"
          />
        </div>
      </div>

      <div className="contact-form__field">
        <select
          name="businessType"
          value={formData.businessType}
          onChange={handleChange}
          className="contact-form__select"
          required
        >
          <option value="">Select your business type</option>
          {businessTypes.map((type) => (
            <option key={type} value={type}>{type}</option>
          ))}
        </select>
      </div>

      <div className="contact-form__field">
        <textarea
          name="message"
          placeholder="Your Message"
          value={formData.message}
          onChange={handleChange}
          rows={4}
          className="contact-form__textarea"
        />
      </div>

      {submitStatus === 'success' && (
        <div className="contact-form__message contact-form__message--success">
          Thank you! We'll be in touch within 24 hours.
        </div>
      )}

      {submitStatus === 'error' && (
        <div className="contact-form__message contact-form__message--error">
          Something went wrong. Please try again or call us directly.
        </div>
      )}

      <Button 
        type="submit" 
        variant={variant === 'hero' ? 'secondary' : 'primary'}
        size="large"
        fullWidth
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Sending...' : buttonText}
      </Button>
    </form>
  );
};

export default ContactForm;

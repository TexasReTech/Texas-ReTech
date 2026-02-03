import { Link } from 'react-router-dom';
import { HiArrowRight } from 'react-icons/hi';
import './ServiceCard.css';

const ServiceCard = ({ 
  icon, 
  title, 
  description, 
  link = '/services',
  linkText = 'Learn More',
  variant = 'default', // 'default', 'bordered', 'featured'
}) => {
  return (
    <div className={`service-card service-card--${variant}`}>
      <div className="service-card__icon">
        {icon}
      </div>
      <h3 className="service-card__title">{title}</h3>
      <p className="service-card__description">{description}</p>
      <Link to={link} className="service-card__link">
        {linkText} <HiArrowRight />
      </Link>
    </div>
  );
};

export default ServiceCard;

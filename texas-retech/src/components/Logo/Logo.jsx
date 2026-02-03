import { Link } from 'react-router-dom';
import './Logo.css';

const Logo = ({ size = 40, variant = 'full', className = '' }) => {
  // variant: 'full' (logo + text), 'icon-only' (just the logo icon), 'text-only'
  
  if (variant === 'icon-only') {
    return (
      <img 
        src="/images/logo.png" 
        alt="Texas Re-Tech" 
        className={`logo logo--icon ${className}`}
        style={{ height: size }}
      />
    );
  }
  
  if (variant === 'text-only') {
    return (
      <div className={`logo logo--text ${className}`}>
        <span className="logo__texas">TEXAS</span>
        <span className="logo__retech">RE-TECH</span>
      </div>
    );
  }
  
  // Full logo with image
  return (
    <div className={`logo logo--full ${className}`} style={{ height: size }}>
      <img 
        src="/images/logo.png" 
        alt="Texas Re-Tech" 
        className="logo__image"
        style={{ height: size }}
      />
    </div>
  );
};

export default Logo;

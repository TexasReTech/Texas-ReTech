import './ProcessStep.css';

const ProcessStep = ({ 
  step, 
  icon, 
  title, 
  description, 
  isLast = false,
  variant = 'default' // 'default', 'detailed'
}) => {
  return (
    <div className={`process-step ${variant === 'detailed' ? 'process-step--detailed' : ''}`}>
      <div className="process-step__icon-wrapper">
        <div className="process-step__icon">
          {icon}
        </div>
        {!isLast && <div className="process-step__connector" />}
      </div>
      <div className="process-step__content">
        <h3 className="process-step__title">
          <span className="process-step__number">{step}.</span> {title}
        </h3>
        <p className="process-step__description">{description}</p>
      </div>
    </div>
  );
};

export default ProcessStep;

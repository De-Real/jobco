import classes from "./FeatureCard.module.css";

const FeatureCard = ({ children, colorIdentifier }) => {
  const customClasses = `${classes.feature} ${classes[colorIdentifier]}`;
  return <div className={customClasses}>{children}</div>;
};

export default FeatureCard;

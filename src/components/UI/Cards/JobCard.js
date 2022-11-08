import classes from "./JobCard.module.css";

const JobCard = (props) => {
  return <div className={classes.wrapper}>{props.children}</div>;
};

export default JobCard;

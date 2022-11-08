import classes from "./JobInfo.module.css";

import location from "../../../assets/location.png";

const JobInfo = ({ title, address }) => {
  return (
    <div className={classes["job__info"]}>
      <h3 className={classes["job__title"]}> {title} </h3>

      {/* department wasn't provided, so it was done based on the title */}
      <p className={classes["job__department"]}>
        Department name: {title.slice(0, 15).trim().toUpperCase()} AEX company
      </p>

      <p className={classes["job__location"]}>
        <img src={location} alt="location-icon"></img>
        <span>{address}</span>
      </p>
    </div>
  );
};

export default JobInfo;

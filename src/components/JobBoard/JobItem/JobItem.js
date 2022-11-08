import classes from "./JobItem.module.css";
import JobRating from "../JobRating/JobRating";
import JobInfo from "../JobInfo/JobInfo";
import JobActions from "../JobActions/JobActions";
import JobCard from "../../UI/Cards/JobCard";
import { Link, useParams } from "react-router-dom";

const JobItem = ({ item, saved }) => {
  const { pageNumber } = useParams();

  return (
    <JobCard>
      <div className={classes["job"]}>

        <Link to={`/jobs/${pageNumber}/details-${item.id}`}>
          <div className={classes["job__img"]}>
            <img src={item.pictures[0]} alt="text-img/job-img"></img>
          </div>
        </Link>
        <div className={classes["job-information"]}>
          <Link to={`/jobs/${pageNumber}/details-${item.id}`}>
            <JobInfo title={item.title} address={item.address} />
          </Link>
          <div className={classes["job-addition"]}>
            <JobRating id={item.id} />
            <JobActions posted={item.createdAt} id={item.id} saved={saved} />
          </div>
        </div>
      </div>
    </JobCard>
  );
};

export default JobItem;

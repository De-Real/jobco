import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import JobDescription from "../components/JobDetails/JobDescription/JobDescription";
import JobDetailsHeader from "../components/JobDetails/JobDetailsHeader/JobDetailsHeader";
import JobFeatures from "../components/JobDetails/JobFeatures/JobFeatures";
import JobImages from "../components/JobDetails/JobImages/JobImages";
import ApplyButton from "../components/UI/Buttons/ApplyButton";
import ReturnButton from "../components/UI/Buttons/ReturnButton";
import { loadItems } from "../store/job-actions";
import classes from "./JobDetails.module.css";

import loadingGif from "../assets/loading-gif.gif";
import JobApplying from "../components/JobDetails/JobApplying/JobApplying";
import Map from "../components/JobDetails/JobMap/Map";

const JobDetails = () => {
  const [isModalShown, setIsModalShow] = useState(false);
  const [isApplied, setIsApplied] = useState(false);

  const modalShownHandler = () => {
    setIsModalShow((curState) => !curState);
  };

  const { jobId, pageNumber } = useParams();

  const jobItems = useSelector((state) => state.jobList.jobItems);
  const fetchStatus = useSelector((state) => state.fetchControl.status);
  const appliedItems = useSelector((state) => state.jobSave.appliedItems);

  const dispatch = useDispatch();

  const navigate = useNavigate();

  useEffect(() => {
    if (jobItems.length === 0) {
      dispatch(loadItems());
    }
  }, [jobItems]);

  useEffect(() => {
    const foundItem = appliedItems.find((item) => {
      return item === jobId;
    });
    if (foundItem) {
      setIsApplied(true);
    }
  }, [appliedItems]);

  if (fetchStatus === "pending") {
    return (
      <main className={classes.main}>
        <img src={loadingGif}></img>
      </main>
    );
  }

  if (fetchStatus === "rejected") {
    return (
      <main className={classes.main}>
        <p>
          Something went wrong... Please reload your page or contact
          Administrator
        </p>
      </main>
    );
  }

  const navigateBackHandler = () => {
    navigate(`/jobs/${pageNumber}`);
  };

  const foundItem = jobItems.find((item) => {
    if (item.id === jobId) return true;
  });

  return (
    <main className={classes.main}>
      {isModalShown && <JobApplying onManageModal={modalShownHandler} />}
      <div className={classes.wrapper}>
        <JobDetailsHeader jobId={jobId} />
        <div className={classes["first-apply"]}>
          <ApplyButton disabled={isApplied} onClick={modalShownHandler}>
            {isApplied ? "Applied" : "Apply now"}
          </ApplyButton>
        </div>
        <JobDescription
          title={foundItem.title}
          salary={foundItem.salary}
          posted={foundItem.createdAt}
          description={foundItem.description}
        />

        <div className={classes["second-apply"]}>
          <ApplyButton disabled={isApplied} onClick={modalShownHandler}>
            {isApplied ? "Applied" : "Apply now"}
          </ApplyButton>
        </div>
        <JobFeatures
          benefits={foundItem.benefits}
          employmentTypes={foundItem.employment_type}
        />
        <JobImages photos={foundItem.pictures} />
        <div className={classes.return}>
          <ReturnButton onClick={navigateBackHandler}>
            Return to job board
          </ReturnButton>
        </div>
      </div>
      <div className={classes.map}>
        <h2> Contacts </h2>
        <Map
          address={foundItem.address}
          email={foundItem.email}
          location={foundItem.location}
          phone={foundItem.phone}
          title={foundItem.title}
        />
      </div>
    </main>
  );
};

export default JobDetails;

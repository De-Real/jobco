import classes from "./JobDetailsHeader.module.css";
import bookmarkFilledIcon from "../../../assets/bookmark-filled.png";
import bookmarkDefaultIcon from "../../../assets/bookmark-default.png";
import shareIcon from "../../../assets/share.png";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { jobSaveActions } from "../../../store/job-save";

import { TelegramShareButton } from "react-share";

const JobDetailsHeader = ({ jobId }) => {
  const [isBookmarked, setIsBookmarked] = useState(false);

  const dispatch = useDispatch();
  const savedJobs = useSelector((state) => state.jobSave.items);

  const onBookmarkChangeHandler = () => {
    if (isBookmarked) {
      dispatch(jobSaveActions.removeItemFromList(jobId));
    } else {
      dispatch(jobSaveActions.saveItemToList(jobId));
    }
    setIsBookmarked((curState) => !curState);
  };

  useEffect(() => {
    const foundedItem = savedJobs.find((item) => {
      if (item === jobId) return true;
    });

    if (foundedItem) {
      setIsBookmarked(true);
    }
  }, [jobId, savedJobs]);

  return (
    <header className={classes.header}>
      <h3> Job Details</h3>
      <div className={classes.actions}>
        <button className={classes.save} onClick={onBookmarkChangeHandler}>
          <span className={classes.icon}>
            <img
              src={isBookmarked ? bookmarkFilledIcon : bookmarkDefaultIcon}
            ></img>
          </span>
          <span>
            {isBookmarked ? "Remove from my list" : "Save to my list"}
          </span>
        </button>
        <TelegramShareButton
          className={classes.share}
          url={window.location.href}
        >
          <span className={classes.icon}>
            <img src={shareIcon}></img>
          </span>
          <span> Share</span>
        </TelegramShareButton>
      </div>
    </header>
  );
};

export default JobDetailsHeader;

import classes from "./JobActions.module.css";

import bookmarkFilledIcon from "../../../assets/bookmark-filled.png";
import bookmarkDefaultIcon from "../../../assets/bookmark-default.png";
import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { jobSaveActions } from "../../../store/job-save";

const JobActions = ({ posted, id, saved }) => {
  const [isBookmarked, setIsBookmarked] = useState(saved);
  const [date, setDate] = useState("0");

  const onBookmarkChangeHandler = () => {
    if (isBookmarked) {
      dispatch(jobSaveActions.removeItemFromList(id));
    } else {
      dispatch(jobSaveActions.saveItemToList(id));
    }

    setIsBookmarked((curState) => !curState);
  };

  const dispatch = useDispatch();

  //Date formatter
  useEffect(() => {
    let date = new Date(posted);
    let currentDate = new Date();

    let difference = currentDate.getTime() - date.getTime();
    let totalDays = Math.ceil(difference / (1000 * 3600 * 24));

    if (totalDays === 0) {
      setDate("today");
    } else if (totalDays === 1) {
      setDate("yesterday");
    } else {
      setDate(String(totalDays));
    }
  }, [posted]);

  const postedDate =
    date === "today" || date === "yesterday" ? date : ` ${date} days ago`;

  return (
    <div className={classes["job__actions"]}>
      <div className={classes["job__save"]} onClick={onBookmarkChangeHandler}>
        <img
          src={isBookmarked ? bookmarkFilledIcon : bookmarkDefaultIcon}
        ></img>
      </div>
      <p className={classes["job__posted"]}>
        Posted
        {postedDate}
      </p>
    </div>
  );
};

export default JobActions;

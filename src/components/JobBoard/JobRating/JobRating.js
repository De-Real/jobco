import React, { useEffect, useState } from "react";
import { Rating } from "@mui/material";

import classes from "./JobRating.module.css";
import { useDispatch, useSelector } from "react-redux";
import { jobRatingActions } from "../../../store/job-rating";

const JobRating = ({ id }) => {
  const [value, setValue] = useState(0);

  const dispatch = useDispatch();

  const ratingsArr = useSelector((state) => state.jobRating.items);

  useEffect(() => {
    if (ratingsArr.length !== 0) {
      const ratingItem = ratingsArr.find((ratedItem) => {
        return ratedItem.id === id;
      });
      if (ratingItem) {
        setValue(ratingItem.rating);
      }
    }
  }, [ratingsArr]);

  const onRatingValueChange = (newValue) => {
    setValue(newValue);
    dispatch(jobRatingActions.saveItemToRatedList({ id, rating: newValue }));
  };

  return (
    <div className={classes["job__rating"]}>
      <Rating
        name="simple-controlled"
        //Width can be defined only at rendering, so when we change width
        //using devtools we need to reload
        size={window.innerWidth < 800 ? "small" : "medium"}
        value={value}
        onChange={(event, newValue) => {
          onRatingValueChange(newValue);
        }}
      />
    </div>
  );
};

export default React.memo(JobRating);

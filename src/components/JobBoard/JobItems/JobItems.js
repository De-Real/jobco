import { useSelector } from "react-redux";
import JobItem from "../JobItem/JobItem";

import classes from "./JobItems.module.css";

const JobItems = ({ posts, loading }) => {
  const idList = useSelector((state) => state.jobSave.items);
  if (loading) {
    return <p> Loading...</p>;
  }

  return (
    <ul className={classes.items}>
      {posts.map((post) => {
        const isSaved = idList.includes(post.id);
        return <JobItem key={post.id} item={post} saved={isSaved} />;
      })}
    </ul>
  );
};

export default JobItems;

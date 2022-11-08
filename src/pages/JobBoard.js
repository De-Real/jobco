import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";

import JobPagination from "../components/JobBoard/Pagination/JobPagination";
import JobItems from "../components/JobBoard/JobItems/JobItems";
import { loadItems } from "../store/job-actions";

import classes from "./JobBoard.module.css";

import loadingGif from "../assets/loading-gif.gif";

const JobBoard = () => {
	
  const { pageNumber } = useParams();
  const navigate = useNavigate();

  const [pageSize, setPageSize] = useState(4);
  const [currentPage, setCurrentPage] = useState(+pageNumber);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false);

  const jobItems = useSelector((state) => state.jobList.jobItems);
  const fetchStatus = useSelector((state) => state.fetchControl.status);
  const jobRatings = useSelector((state) => state.jobRating.items);

  const dispatch = useDispatch();

  useEffect(() => {
    if (jobItems.length === 0) {
      dispatch(loadItems());
    }
  }, []);

  useEffect(() => {
    if (jobItems.length !== 0) {
      setPosts(jobItems);
    }
  }, [jobItems]);

  useEffect(() => {
    navigate(`/jobs/${currentPage}`);
  }, [currentPage]);

  //If page is fetching data we show the load gif
  if (fetchStatus === "pending") {
    return (
      <section className={classes["job-board-section"]}>
        <img src={loadingGif}></img>
      </section>
    );
  }

  //If request was failed we show this message
  if (fetchStatus === "rejected") {
    return (
      <section className={classes["job-board-section"]}>
        <p>
          Something went wrong... Please reload your page or contact
          Administrator
        </p>
      </section>
    );
  }

  //Slice the posts that will be shown at the current page
  const currentPosts = () => {
    const firstPageIndex = (currentPage - 1) * pageSize;
    const lastPageIndex = firstPageIndex + pageSize;
    const pagePosts = posts.slice(firstPageIndex, lastPageIndex);
    if (jobRatings.length === 0) {
      return pagePosts;
    }
    return pagePosts;
  };

  return (
    <section className={classes["job-board-section"]}>
      <JobItems posts={currentPosts()} loading={loading} />
      <JobPagination
        className={classes["pagination-bar"]}
        currentPage={currentPage}
        totalCount={posts.length}
        pageSize={pageSize}
        onPageChange={(page) => setCurrentPage(page)}
      />
    </section>
  );
};

export default JobBoard;

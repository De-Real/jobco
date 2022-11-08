import React from "react";
import classnames from "classnames";
import { usePagination, DOTS } from "../../../hooks/use-pagination";
import "./job-pagination.css";

import leftArrow from "../../../assets/left-arrow.png";
import rightArrow from "../../../assets/right-arrow.png";

const JobPagination = (props) => {
  const {
    onPageChange,
    totalCount,
    siblingCount = 1,
    currentPage,
    pageSize,
    className,
  } = props;

  const paginationRange = usePagination({
    currentPage,
    totalCount,
    siblingCount,
    pageSize,
  });

  if (currentPage === 0 || paginationRange.length < 2) {
    return null;
  }

  const onNext = () => {
    onPageChange(currentPage + 1);
  };

  const onPrevious = () => {
    onPageChange(currentPage - 1);
  };

  let lastPage = paginationRange[paginationRange.length - 1];

  return (
    <ul
      className={classnames("pagination-container", { [className]: className })}
    >
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === 1,
        })}
        onClick={onPrevious}
      >
        {/* <div className="arrow left" /> */}
        <div>
          <img src={leftArrow}></img>
        </div>
      </li>
      <li className={classnames("pagination-line")}></li>

      {paginationRange.map((pageNumber) => {
        if (pageNumber === DOTS) {
          return (
            <li key={Math.random()} className="pagination-item dots">
              &#8230;
            </li>
          );
        }

        return (
          <li
            key={Math.random()}
            className={classnames("pagination-item", {
              selected: pageNumber === currentPage,
            })}
            onClick={() => onPageChange(pageNumber)}
          >
            {pageNumber}
          </li>
        );
      })}

      <li className={classnames("pagination-line")}></li>
      <li
        className={classnames("pagination-item", {
          disabled: currentPage === lastPage,
        })}
        onClick={onNext}
      >
        <div>
          <img src={rightArrow}></img>
        </div>
      </li>
    </ul>
  );
};

export default JobPagination;

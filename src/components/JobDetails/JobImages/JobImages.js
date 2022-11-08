import { useState } from "react";
import classes from "./JobImages.module.css";
import JobZoomedImage from "../JobZoomedImage/JobZoomedImage";

const JobImages = ({ photos }) => {
  const [isZoomed, setIsZoomed] = useState();
  const [zoomedIndex, setZoomedIndex] = useState();

  const zoomPhoto = (index) => {
    if (window.innerWidth < 480) return;
    setIsZoomed((curState) => !curState);
    setZoomedIndex(index);
  };

  return (
    <>
      <article className={classes.images}>
        <header>
          <h3>Attached images</h3>
        </header>
        <section className={classes.items}>
          {photos.map((photo, index) => {
            return (
              <div
                key={Math.random()}
                className={classes.img}
                onClick={zoomPhoto.bind(null, index)}
              >
                <img src={photo}></img>
              </div>
            );
          })}
        </section>
      </article>
      {isZoomed && (
        <JobZoomedImage photo={photos[zoomedIndex]} onClose={zoomPhoto} />
      )}
    </>
  );
};

export default JobImages;

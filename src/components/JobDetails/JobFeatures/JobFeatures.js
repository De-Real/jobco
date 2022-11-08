import FeatureCard from "../../UI/Cards/FeatureCard";
import classes from "./JobFeatures.module.css";

const JobFeatures = ({ employmentTypes, benefits }) => {
  return (
    <article className={classes.features}>
      <header>
        <h3>Additional info</h3>
      </header>
      <section className={classes["features-section"]}>
        <h4>Employment type</h4>
        <div className={classes["features-card"]}>
          {employmentTypes.map((type) => {
            return <FeatureCard key={Math.random()}> {type} </FeatureCard>;
          })}
        </div>
        <h4> Benefits </h4>
        <div className={classes["features-card"]}>
          {benefits.map((benefit) => {
            return (
              <FeatureCard key={Math.random()} colorIdentifier="yellow">
                {benefit}
              </FeatureCard>
            );
          })}
        </div>
      </section>
    </article>
  );
};

export default JobFeatures;

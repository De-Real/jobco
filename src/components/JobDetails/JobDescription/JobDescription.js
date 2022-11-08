import { useEffect, useState } from "react";
import classes from "./JobDescription.module.css";

const JobDescription = ({ title, salary, posted, description }) => {
  const [date, setDate] = useState("0");

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

  const separationFn = (data) => {
    const resp = data.split("\n");
    const filteredResp = resp.filter((item) => {
      if (!item.trim()) return false;
      return true;
    });

    const formedList = filteredResp[4]
      .trim()
      .split(".")
      .map((item) => {
        if (!item) return;
        return (
          <li key={Math.random()} className={classes["job-item"]}>
            {item}
          </li>
        );
      });

    return {
      desc: filteredResp[0].trim(),
      responsibilities: filteredResp[2].trim(),
      benefits: formedList,
    };
  };

  const formatSalary = (data) => {
    return `€${data
      .split("-")
      .map((item) => {
        return item.replace("k", "000");
      })
      .join(" - ")}`;
  };

  const { desc, responsibilities, benefits } = separationFn(description);

  return (
    <article className={classes["job-details"]}>
      <section className={classes.top}>
        <h3> {title}</h3>
        <div className={classes.salary}>
          <p>{formatSalary(salary)}</p>
          <p>Brutto, per year</p>
        </div>
        <div className={classes.posted}>
          Posted
          {date === "today" || date === "yesterday"
            ? date
            : ` ${date} days ago`}
        </div>
      </section>

      <section className={classes["job-description"]}>
        <div> {desc}</div>
        <h4>Responsibilities: </h4>
        <div>{responsibilities}</div>
        <h4>Compensation & Benefits:</h4>
        <div className={classes["job-benefits"]}>
          <p>Our physicians enjoy a wide range of benefits, including:</p>
          <ul>{benefits}</ul>
        </div>
      </section>
    </article>
  );
};

export default JobDescription;

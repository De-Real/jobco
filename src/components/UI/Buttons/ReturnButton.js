import classes from "./ReturnButton.module.css";
import returnArrow from "../../../assets/return-arrow.png";

const ReturnButton = ({ onClick, children }) => {
  return (
    <button className={classes.button} onClick={onClick}>
      <span className={classes.arrow}>
        <img src={returnArrow} alt="return-arrow"></img>
      </span>
      <span>{children}</span>
    </button>
  );
};

export default ReturnButton;

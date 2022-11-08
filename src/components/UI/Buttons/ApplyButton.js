import classes from "./ApplyButton.module.css";

const ApplyButton = ({ onClick, children, disabled }) => {
  return (
    <button disabled={disabled} className={classes.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default ApplyButton;

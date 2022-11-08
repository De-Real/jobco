import { Modal, Box } from "@mui/material";
import classes from "./JobApplying.module.css";

import ApplyButton from "../../UI/Buttons/ApplyButton";
import ReturnButton from "../../UI/Buttons/ReturnButton";

import uploadIcon from "../../../assets/upload.svg";
import {useState } from "react";
import { useDispatch} from "react-redux";
import { jobSaveActions } from "../../../store/job-save";
import { useParams } from "react-router-dom";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  borderRadius: 4,
  p: 1,
};

const JobApplying = ({ onManageModal }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [textareaValue, setTextareaValue] = useState("");

  const { jobId } = useParams();

  const dispatch = useDispatch();

  const onFileChangeHandler = (e) => {
    setSelectedFile(e.target.files[0]);
  };

  const onTextareaValueChange = (e) => {
    setTextareaValue(e.target.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(jobSaveActions.applyForJob(jobId));
    onManageModal();
  };

  let attachFileText = (
    <>
      <img src={uploadIcon}></img>Attach your CV:
    </>
  );

  if (selectedFile) {
    attachFileText = `Attached file: ${selectedFile.name}`;
  }

  return (
    <Modal
      open={true}
      onClose={onManageModal}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <section className={classes.section}>
          <h2> Apply for the job </h2>
          <form onSubmit={onSubmitHandler}>
            <div className={classes.textarea}>
              <label htmlFor="textarea"> Write a cover letter </label>
              <textarea
                id="textarea"
                value={textareaValue}
                onChange={onTextareaValueChange}
              />
            </div>
            <div className={classes.file}>
              <label htmlFor="myfile">{attachFileText}</label>
              <input
                type="file"
                id="myfile"
                name="myfile"
                onChange={onFileChangeHandler}
              />
            </div>
            <div className={classes.buttons}>
              <ApplyButton> Apply </ApplyButton>
              <ReturnButton
                onClick={(e) => {
                  e.preventDefault();
                  onManageModal();
                }}
              >
                Cancel
              </ReturnButton>
            </div>
          </form>
        </section>
      </Box>
    </Modal>
  );
};

export default JobApplying;

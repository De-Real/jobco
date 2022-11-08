import { Modal, Box } from "@mui/material";

import classes from "./JobZoomedImage.module.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  bgcolor: "background.paper",
  boxShadow: 24,
  p: 4,
  padding: 0,
};

const JobZoomedImage = ({ onClose, photo }) => {
  return (
    <Modal
      open={true}
      onClose={onClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={style}>
        <div className={classes["zoomed-img"]}>
          <img src={photo}></img>
        </div>
      </Box>
    </Modal>
  );
};

export default JobZoomedImage;

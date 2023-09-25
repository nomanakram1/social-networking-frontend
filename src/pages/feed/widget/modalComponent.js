import React from "react";
import { Modal, Box } from "@mui/material";
import FormCard from "./formCard";

function ModalComponent({ open, handleClose }) {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
  };

  return (
    <Modal open={open} onClose={handleClose}>
      <Box sx={style}>
        <FormCard onSubmit={handleClose} />
      </Box>
    </Modal>
  );
}

export default ModalComponent;

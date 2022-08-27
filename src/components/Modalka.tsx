import { Block } from "@mui/icons-material";
import { Box, Button, Modal, Typography } from "@mui/material";
import React from "react";

interface ModalProps {
  children: React.ReactNode;
  title: string;
}

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export const Modalka = ({ children, title }: ModalProps) => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  return (
    <>
      <Button onClick={handleOpen} variant="outlined"
       sx={{ display:"block", mx:"auto", my:3 }}>{title} </Button>

      <Modal
        open={open}

        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography variant="h6" component="div" sx={{mb:3}}>
            {title}
          </Typography>
          {children}
        </Box>
      </Modal>
    </>
  );
};

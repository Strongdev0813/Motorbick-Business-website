import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import SelectYear from "./SelectYear";
import SelectMonth from "./SelectMonth";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import "./payBike.css";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 4,
};

export default function TransitionsModal() {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [cardNum, setCardNum] = useState("");

  return (
    <div id="payBike">
      <Button onClick={handleOpen}>Open modal</Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <Box sx={style}>
            <Typography id="transition-modal-title" variant="h6" component="h2">
              Buy A Bike:
            </Typography>
            <Typography id="transition-modal-description" sx={{ mt: 2 }}>
              <TextField
                className="inputAddCardNum"
                label="credit card number"
                onChange={(e) => setCardNum(e.target.value)}
              ></TextField>
              <TextField
                className="inputCvvCardNum"
                label="CVV"
                onChange={(e) => setCardNum(e.target.value)}
              ></TextField>
              <SelectYear></SelectYear>
              <SelectMonth></SelectMonth>
              <Stack spacing={2} direction="row">
                <Button variant="outlined">cancle</Button>
                <Button variant="contained">pay</Button>
              </Stack>
            </Typography>
          </Box>
        </Fade>
      </Modal>
    </div>
  );
}

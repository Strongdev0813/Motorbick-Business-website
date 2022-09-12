import "./buyProducts.css";
import * as React from "react";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import Stack from "@mui/material/Stack";
import Checkboxes from "./payCheckbox";
import { Formik } from "formik";
import * as Yup from "yup";
import FireWorks from "./FireWorks";

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
const BuyProducts = (props) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [revealTwo, setRevealTwo] = useState(true);
  const [reveal, setReveal] = useState(false);
  const timef = () => {
    setReveal(false);
    setRevealTwo(false);
  };
  const schema = Yup.object().shape({
    iD: Yup.string()
      .required("Your ID is required")
      .min(9, "Your ID should have 9 charecters")
      .max(9, "Your ID should have 9 charecters")
      .matches(/^[0-9]+$/, "Must be only digits"),

    cardNumber: Yup.string()
      .required("Your Card Numer is required")
      .min(16, "Your card number should have 16 charecters")
      .max(16, "Your card number should have 16 charecters")
      .matches(/^[0-9]+$/, "Must be only digits"),

    cvv: Yup.string()
      .required("CVV is required")
      .min(3, "Your cvv should have 3 charecters")
      .max(3, "Your cvv should have 3 charecters")
      .matches(/^[0-9]+$/, "Must be only digits"),

    SelectYear: Yup.number()
      .required("The validity of your card year is required")
      .typeError("sfsvxcv")
      .positive("ppp")
      .integer("int")
      .min(2022)
      .max(2030),

    SelectMonth: Yup.number()
      .required("The validity of your card year is required")
      .typeError("sfsvxcv")
      .positive("ppp")
      .integer("int")
      .min(1)
      .max(12),

    agree: Yup.boolean().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });

  return (
    <div className="divBikes">
      <img className="bikeImg" alt="" src={props.src}></img>
      <div class="contentPicture">{props.name}</div>
      <div class="pricePicture">{props.price}</div>

      <div id="payBike">
        <Button className="buttonBuy" variant="contained" onClick={handleOpen}>
          Buy
        </Button>
        {revealTwo && (
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
                <Typography
                  id="transition-modal-title"
                  variant="h6"
                  component="h2"
                >
                  <h1 id="h1Buy">Buy A Bike</h1>
                </Typography>
                <Typography id="transition-modal-description" sx={{ mt: 2 }}>
                  <Formik
                    initialValues={{
                      iD: "",
                      cardNumber: "",
                      cvv: "",
                      SelectYear: "",
                      SelectMonth: "",
                      agree: true,
                    }}
                    onSubmit={(values) => {
                      setReveal(true);
                      setTimeout(timef, 2000);
                    }}
                    validationSchema={schema}
                  >
                    {({
                      handleSubmit,
                      handleChange,
                      values,
                      errors,
                      handleBlur,
                      touched,
                    }) => (
                      <form action="" onSubmit={handleSubmit}>
                        <TextField
                          className="inputCvvCardNum"
                          label="ID"
                          name="iD"
                          onChange={handleChange}
                          value={values.iD}
                          onBlur={handleBlur}
                        ></TextField>
                        <p className="pInputsYup">
                          {errors.iD && touched.iD && errors.iD}
                        </p>
                        <TextField
                          className="inputAddCardNum"
                          label="Card Number"
                          name="cardNumber"
                          onChange={handleChange}
                          value={values.cardNumber}
                          onBlur={handleBlur}
                        ></TextField>
                        <p className="pInputsYup">
                          {errors.cardNumber &&
                            touched.cardNumber &&
                            errors.cardNumber}
                        </p>
                        <TextField
                          className="inputCvvCardNum"
                          label="CVV"
                          name="cvv"
                          onChange={handleChange}
                          value={values.cvv}
                          onBlur={handleBlur}
                        ></TextField>
                        <p className="pInputsYup">
                          {errors.cvv && touched.cvv && errors.cvv}
                        </p>
                        <TextField
                          className="inputSelectYear"
                          label="SelectYear"
                          name="SelectYear"
                          onChange={handleChange}
                          value={values.SelectYear}
                          onBlur={handleBlur}
                        ></TextField>
                        <p className="pInputsYup">
                          {errors.SelectYear &&
                            touched.SelectYear &&
                            errors.SelectYear}
                        </p>
                        <TextField
                          className="inputSelectMonth"
                          label="SelectMonth"
                          name="SelectMonth"
                          onChange={handleChange}
                          value={values.SelectMonth}
                          onBlur={handleBlur}
                        ></TextField>
                        <p className="pInputsYup">
                          {errors.SelectMonth &&
                            touched.SelectMonth &&
                            errors.SelectMonth}
                        </p>
                        {errors.phoneNumber &&
                          touched.phoneNumber &&
                          errors.phoneNumber}
                        <Checkboxes name="agree" id="agree"></Checkboxes>
                        <p id="pAgree">
                          {errors.agree && touched.agree && errors.agree}
                        </p>
                        <Stack spacing={2} direction="row">
                          <div id="fire">
                            <Button type="submit" variant="contained">
                              pay
                            </Button>
                            {reveal && (
                              <div>
                                <div>
                                  <FireWorks></FireWorks>
                                </div>
                                <br /> <div>Congratulations!</div>
                              </div>
                            )}
                          </div>
                        </Stack>
                      </form>
                    )}
                  </Formik>
                </Typography>
              </Box>
            </Fade>
          </Modal>
        )}
      </div>
    </div>
  );
};
export default BuyProducts;

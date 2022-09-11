import { Field, Formik } from "formik";
import * as Yup from "yup";
import Button from "@mui/material/Button";
import "./login.css";


const LogIn = () => {
 

  const schema = Yup.object().shape({
    email: Yup.string().required("please enter your email"),

    password: Yup.string().required("password is required"),
    agree: Yup.boolean().oneOf(
      [true],
      "You need to accept the terms and conditions"
    ),
  });
  return (
    <div className="loginloc">
      <h3>Log in</h3>

      <Formik
        initialValues={{ email: "", password: "", agree: false }}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
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
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              value={values.email}
              onBlur={handleBlur}
            />
            <p>{errors.email && touched.email && errors.email}</p>
            <input
              type="password"
              name="password"
              placeholder="password"
              onChange={handleChange}
              value={values.password}
              onBlur={handleBlur}
            />

            <p>{errors.password && touched.password && errors.password}</p>

            <p>
              {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
            </p>
         
            <p>{errors.agree && touched.phoneNumber && errors.agree}</p>
            <Button
              type="submit"
              variant="contained"
             
            >
              Log In
            </Button>
          </form>
        )}
      </Formik>
    </div>
  );
};
export default LogIn;

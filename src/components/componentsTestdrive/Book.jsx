import { Formik } from "formik";
import * as Yup from "yup";
import moment from "moment";
import './book.css'

const Book = () => {
  const schema = Yup.object().shape({
    email: Yup.string()
      .required("Enter Email")
      .email("please entar a valid email example: jhon@jhonson.com"),
    firstName: Yup.string().required("Enter Your First Name"),
    lastName: Yup.string().required("Enter Your Last Name"),
    phoneNumber: Yup.string()
      .required("Enter A Valid Phone Number")
      .max(10, "A Phone Number Cant Exceed 10 Numbers"),
    driverLicense: Yup.string()
      .required("Enter your Driver License Number")
      .max(7, "Your License Number Cant Exceed 7 Numbers"),
    birthDate: Yup.string()
      .nullable()
      .test("birthDate", "Example 1970-02-08 (Must Be 18)", function (value) {
        return moment().diff(moment(value, "YYYY-MM-DD"), "years") >= 18;
      })
      .required("Please Enter Your Age "),
  });
  return (
    <div>
      <h4 className="headline">Book Your Test Drive</h4>
      <Formik
        initialValues={{
          email: "",
          firstName: "",
          lastName: "",
          phoneNumber: "",
          birthDate: "",
          driverLicense: "",
        }} 
        onSubmit={(values) =>
          alert(`We Have Booked Youre Test-Drive And We Will Make Contact With You Soon`, JSON.stringify(values))
        }
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
          <form onSubmit={handleSubmit} noValidate>
            <input
              type="text"
              name="firstName"
              placeholder="first Name"
              onChange={handleChange}
              values={values.firstName}
            />
            <p style={{ color: "red" }}>
              {errors.firstName && touched.firstName && errors.firstName}
            </p>
            <input
              type="text"
              name="lastName"
              placeholder="last Name"
              onChange={handleChange}
              values={values.lastName}
            />
            <p style={{ color: "red" }}>
              {errors.lastName && touched.lastName && errors.lastName}
            </p>
            <input
              type="text"
              name="driverLicense"
              placeholder="Driver License Number"
              onChange={handleChange}
              values={values.driverLicense}
            />
            <p style={{ color: "red" }}>
              {errors.driverLicense &&
                touched.driverLicense &&
                errors.driverLicense}
            </p>
            <input
              type="text"
              name="phoneNumber"
              placeholder="Phone Number"
              onChange={handleChange}
              values={values.phoneNumber}
            />
            <p style={{ color: "red" }}>
              {errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}
            </p>
            <input
              type="text"
              name="birthDate"
              placeholder="Birthdate(YYYY-MM-DD)"
              onChange={handleChange}
              values={values.birthDate}
            />
            <p style={{ color: "red" }}>
              {errors.birthDate && touched.birthDate && errors.birthDate}
            </p>
            <input
              type="email"
              name="email"
              placeholder="Email"
              onChange={handleChange}
              values={values.email}
              onBlur={handleBlur}
            />
            <p style={{ color: "red" }}>
              {errors.email && touched.email && errors.email}
            </p>
            <button className="book-btn" type="submit">BOOK NOW</button>
          </form>
        )}
      </Formik>
    </div>
  );
};

export default Book;

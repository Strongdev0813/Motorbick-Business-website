import { Field, Formik} from "formik";
import * as Yup from "yup"
import Button from '@mui/material/Button';
import './formichome.css'
import { useDispatch, useSelector } from "react-redux";
import {  plus,  selectAll } from "../../redux/InfoSlice";


const FormikHome= ()=>{
  
  const objAll = useSelector(selectAll);
  const dispatch = useDispatch();
    const schema = Yup.object().shape({
        username: Yup.string()
        .required("please enter your name")
        .min(6," must have min 6 digits")
       ,

        password: Yup.string()
        .required("phone is required")
        .min(10,"Your phone number should have 10 charecters")
        .max(10,"Your phone number should have 10 charecters")
        .matches(/^[0-9]+$/, "Must be only digits"),

       
        agree: Yup.boolean()
    .oneOf([true], 'You need to accept the terms and conditions')
    } )
    return(
        <div>
            <h1>Contact us</h1>
            <h3 className="over">phone:077884048</h3>
            <h3 className="over">email:motorbike@likepro.com</h3>
            <h4>Have a question?</h4>
            <h4>leave your phone </h4>
            <h5>we will call you back</h5>
         
            <Formik
        initialValues={{ username: "", password: "" ,phoneNumber:"", agree:false}}
        onSubmit={(values) => {
          alert(JSON.stringify(values));
        }}
        validationSchema={schema}
      >
        {({handleSubmit,handleChange,values,errors,handleBlur,touched}) => (
          <form action="" onSubmit={handleSubmit} >
            <input
              type="text"
              name="username"
              placeholder="Your Name"
              onChange= {handleChange}
              value= {values.username}
              onBlur={handleBlur}
              />
              <p>{errors.username && touched.username && errors.username}</p>
            <input
              type="text"
              name="password"
              placeholder="Your Phone"
              onChange= {handleChange}
              value= {values.password}
              onBlur={handleBlur}
              />
              
              <p >{errors.password && touched.password && errors.password}</p>
             
            
             <p>{errors.phoneNumber && touched.phoneNumber && errors.phoneNumber}</p>
             <label htmlFor="agree">agree to the terms
             <Field type="checkbox" name="agree" id="agree"  />          
             </label>
             <p>{errors.agree && touched.phoneNumber &&  errors.agree}</p>
            <Button  type="submit" variant="contained"  onClick={() => dispatch(plus(values))} >submit</Button>

           
          </form>
        )}
      </Formik>
           
        </div>
    )
}
export default FormikHome
import Button from '@mui/material/Button';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import './registerform.css'

const RegisterForm= ()=>{
    const professions = ['Male', 'Female', 'Other'];
    const formik = useFormik({
        
        initialValues: {
          name: '',
          email: '',
          profession: professions[0],
          age: '',
        },
        onSubmit: function (values) {
          alert(`You are registered! Name: ${values.name}. Email: ${values.email}. Profession: ${values.profession}. 
            Age: ${values.age}`);
       
        },
        validationSchema: Yup.object({
            name: Yup.string()
                    .label('Full Name')
                    .required(),
            email: Yup.string()
                    .email()
                    .required(),
            profession: Yup.string()
                        .oneOf(professions, 'The profession you chose does not exist'),
            age: Yup.number()
                  .min(15, 'You need to be older than 15 to register')
                  .required()
          })
      })
    return(
        <div className='register'>
            <br /><br />
                 <div className="bg-blue-300 min-w-screen min-h-screen overflow-x-hidden">
      <form onSubmit={formik.handleSubmit} className="max-w-lg mx-auto bg-brown rounded shadow-lg mt-7 p-3">
      <h1 className='text-3xl mb-3 text-center'>Register</h1>
        <div className='mb-4'>
          <label for="name">Full Name</label>
          <input type="text" name="name" id="name" 
            className={`block w-full rounded border py-1 px-2 ${formik.touched.name && formik.errors.name ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.name} />
          {formik.touched.name && formik.errors.name && (
            <span className='text-red-400'>{formik.errors.name}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="email">Email</label>
          <input type="email" name="email" id="email"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.email && formik.errors.email ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.email} />
          {formik.touched.email && formik.errors.email && (
            <span className='text-red-400'>{formik.errors.email}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="profession">Gender</label>
          <select name="profession" id="profession"
            className={`block w-full rounded border py-1 px-2 ${formik.touched.profession && formik.errors.profession ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.profession} >
            {professions.map((profession, index) => (
              <option value={profession} key={index}>{profession}</option>
            ))}
          </select>
          {formik.touched.profession && formik.errors.profession && (
            <span className='text-red-400'>{formik.errors.profession}</span>
          )}
        </div>
        <div className='mb-4'>
          <label for="age">Age</label>
          <input type="number" name="age" id="age"
          
            className={`block w-full rounded border py-1 px-2 ${formik.touched.age && formik.errors.age ? 'border-red-400' : 'border-gray-300'}`}
            onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.age} /> <br />
           
          {formik.touched.age && formik.errors.age && ( 
            <span className='text-red-400'><br />{formik.errors.age}</span>
          )}
        </div>
        <div className='text-center'>
          <Button className='bg-blue-500 rounded p-3 text-white' type='submit'  variant="contained" >Submit</Button>
        </div>
      </form>
    </div>
           
        </div>
    )
}
export default RegisterForm
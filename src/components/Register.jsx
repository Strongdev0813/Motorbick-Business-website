import AnimationRegister from "./componentsRegister/AnimationRegister"
import RegisterForm from "./componentsRegister/RegisterForm"
import { useState } from "react"

const Register= ()=>{
    const [load,setLoad] = useState(false)  
    return(
        <div>
      
       <RegisterForm  setLoad={setLoad}></RegisterForm>  

       <AnimationRegister load={load}></AnimationRegister>  
        </div>
    )
}
export default Register
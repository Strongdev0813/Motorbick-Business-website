

import './componentsHome/home.css'
import AboutHome from "./componentsHome/AboutHome";
import CaruselHome from './componentsHome/CaruselHome';
import InfoHome from './componentsHome/InfoHome';
import FormikHome from './componentsHome/FormikHome';


const Home= ()=>{
    return(
        <div>
            <br /><br />
         <AboutHome></AboutHome>
         <br></br><br /><br />
         <CaruselHome></CaruselHome>
         <InfoHome></InfoHome>
         <FormikHome></FormikHome>

           
        </div>
    )
}
export default Home
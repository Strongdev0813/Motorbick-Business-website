import './componentsHome/home.css'
import AboutHome from "./componentsHome/AboutHome";
import CaruselHome from './componentsHome/CaruselHome';
import InfoHome from './componentsHome/InfoHome';
import FormikHome from './componentsHome/FormikHome';
import LogIn from './componentsHome/LogIn';
import ReduxHome from './componentsHome/ReduxHome';


const Home= ()=>{
    return(
        <div>
            <br /><br /><br /> 
            {/* <ReduxHome></ReduxHome> */}
            <LogIn></LogIn>
            <AboutHome></AboutHome>
            
         
         <br></br><br /><br />
         <CaruselHome></CaruselHome>
         <InfoHome></InfoHome>
         <FormikHome></FormikHome>

           
        </div>
    )
}
export default Home
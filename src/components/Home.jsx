import './componentsHome/home.css'
import AboutHome from "./componentsHome/AboutHome";
import CaruselHome from './componentsHome/CaruselHome';
import InfoHome from './componentsHome/InfoHome';
import FormikHome from './componentsHome/FormikHome';
import LogIn from './componentsHome/LogIn';
import ReduxHome from './componentsHome/ReduxHome';
import {useDispatch, useSelector} from "react-redux"
import { minus, plus ,change, objAll,selectAll} from "../redux/InfoSlice"
import Button from "@mui/material/Button";


const Home= ()=>{
    const objAll= useSelector(selectAll)
    const dispatch = useDispatch()
    return(
        <div>
            <br /><br /><br /> 
            <ReduxHome></ReduxHome>
          {objAll.amount ?
            <LogIn></LogIn> : <Button  variant="contained" onClick={()=>{dispatch(change())}}>Log out</Button>
          }
            <AboutHome></AboutHome>
            
         
         <br></br><br /><br />
         <CaruselHome></CaruselHome>
         <InfoHome></InfoHome>
         <FormikHome></FormikHome>

           
        </div>
    )
}
export default Home
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
import { useState } from 'react';


const Home= ()=>{
  const [first,setfirst] =useState(true)
    const objAll= useSelector(selectAll)
    const dispatch = useDispatch()
    const nameFromStorage = localStorage.getItem('my-key3');
      
   function logout (){
    dispatch(change())
    setfirst(false)


   }


    return(
        <div>
            <br /><br /><br /> 

            {first&&<ReduxHome></ReduxHome>}
            
          {objAll.amount ?
            <LogIn change={change}></LogIn> : <div className='grid-log-out'><br />  Wellcome back {nameFromStorage}<Button  variant="contained" onClick={()=>{logout()}}>Log out</Button></div>
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
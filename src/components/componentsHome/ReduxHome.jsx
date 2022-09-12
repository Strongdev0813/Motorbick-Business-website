import {useDispatch, useSelector} from "react-redux"
import { minus, plus ,add, selectAll} from "../../redux/InfoSlice"
import './reduxhome.css'

const ReduxHome = () =>{
   
  
    const objAll= useSelector(selectAll)
   
    
    return(

        <div className="redux">
  
  <span style={{color:"yellow"}}>{objAll.value}</span>    

   
        </div>
    )
}
export default ReduxHome

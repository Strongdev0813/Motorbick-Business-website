import {useDispatch, useSelector} from "react-redux"
import { minus, plus ,add, selectAll} from "../../redux/InfoSlice"
import './reduxhome.css'

const ReduxHome = () =>{
  
    const objAll= useSelector(selectAll)
    const dispatch = useDispatch()
    
    return(

        <div className="redux">
  
  <span>{objAll.value}</span>      
 
        </div>
    )
}
export default ReduxHome

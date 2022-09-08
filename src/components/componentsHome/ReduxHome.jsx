import {useDispatch, useSelector} from "react-redux"
import { minus, plus ,add, selectAll} from "../../redux/InfoSlice"

const ReduxHome = () =>{
  
    const objAll= useSelector(selectAll)
    const dispatch = useDispatch()
    return(

        <div>
  <button onClick={()=>dispatch(plus())}>+++</button>
  <span>{objAll.value}</span>      
  <button onClick={()=>dispatch(minus())}>---</button>   
  <button onClick={()=>dispatch(add())}>add</button>  
  <span>{objAll.amount} </span> 
  <div>{objAll.amount}</div>
        </div>
    )
}
export default ReduxHome

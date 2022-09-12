
import Spinner from 'react-bootstrap/Spinner';
import "./animationregister.css"
const AnimationRegister= (props)=>{
   
 const settt =() =>{
    props.setLoad(false)
 }   

     
    return(
        <div className='loading'>
       { props.load&&
           <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...{setTimeout(settt, 3000)}</span>
      
    </Spinner>
   
       } 
        </div>
    )
}
export default AnimationRegister
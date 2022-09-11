
import Spinner from 'react-bootstrap/Spinner';
import "./animationregister.css"
const AnimationRegister= (props)=>{
     
    return(
        <div className='loading'>
       { props.load&&
           <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

       } 
        </div>
    )
}
export default AnimationRegister

import Spinner from 'react-bootstrap/Spinner';
const AnimationRegister= (props)=>{
     
    return(
        <div>
       { props.load&&
           <Spinner animation="border" role="status">
      <span className="visually-hidden">Loading...</span>
    </Spinner>

       } 
        </div>
    )
}
export default AnimationRegister
import { Link } from "react-router-dom"

import "./navbar.css"


const Navbar= ()=>{
    return(
        <div>
            <nav>
            <Link to="/">Home</Link>

            <Link to="/Products">products</Link>
            <Link to="/TestDrive">TestDrive</Link>
            <Link to="/Register">Register</Link>
           
           
           

            </nav>
        </div>
    )
}
export default Navbar
import { Link } from "react-router-dom"


import "./navbar.css"


const Navbar= ()=>{
    return(
        <div>
            <nav>
                <div className="logo">
            <img  src="https://assets.ducati.com/dist/0.8.2/assets/img/ducati_id.png" alt="DUCATI" itemprop="logo"/>
            </div>
            <h1><Link to="/">Motorbike</Link></h1>
          
            <Link to="/">Home</Link>
            <Link to="/Products">products</Link>
            <Link to="/TestDrive">TestDrive</Link>
            <Link to="/Register">Register</Link>
           
           
           

            </nav>
        </div>
    )
}
export default Navbar
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import Register from "./components/Register";
import TestDrive from "./components/TestDrive";
function App() {
  return (
    <div className="App">
      <div>
        <Navbar></Navbar>
        <div>
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/Products" element={<ProductsPage />}></Route>
            <Route path="/TestDrive" element={<TestDrive />}></Route>
            <Route path="/Register" element={<Register />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;

// mui router formik yup redux

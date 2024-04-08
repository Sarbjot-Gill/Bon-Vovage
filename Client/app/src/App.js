import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import './comp/Navbar.js'
import Exp from "./comp/exp";
import Home from "./comp/home";
import Ez from "./comp/ez";
import Dataend from "./comp/dataend";
import Tour from "./comp/tour";
import Hotel from "./comp/hotel";
import Hotelinfo from "./comp/hotelinfo";
import Booking from "./comp/booking";
import Admin from "./comp/admin";
import Userd from "./comp/userd";

function App() {
  return (
  <>
  <BrowserRouter>
  <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/Exp" element={<Exp />}></Route>
    <Route path="/Ez" element={<Ez />}></Route>
    <Route path="/Dataend" element={<Dataend />}></Route>
    <Route path="/tour" element={<Tour />}></Route>
    <Route path="/Hotel" element={<Hotel />}></Route>
    <Route path="/Hotelinfo" element={<Hotelinfo />}></Route>
    <Route path="/Booking" element={<Booking />}></Route>
    <Route path="/Admin" element={<Admin />}></Route>
    <Route path="/Userd" element={<Userd />}></Route>
    

  </Routes>
  </BrowserRouter>

</>
  );
}

export default App;

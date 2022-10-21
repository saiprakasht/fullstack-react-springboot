import './App.css';
import AddVehicle from './components/AddVehicle';
import Navbar from './components/Navbar';
import {BrowserRouter, Routes, Route} from "react-router-dom";
import VehicleHome from './components/VehicleHome';
import UpdateVehicle from './components/UpdateVehicle';

function App() {
  return (
    <>
    <BrowserRouter>
    <Navbar/>
    <Routes>
      <Route path="/" element={<VehicleHome/>}></Route>
      <Route index element={<VehicleHome/>}></Route>
      <Route path="/addvehicle" element={<AddVehicle/>}></Route>
      <Route path="/updateVehicle/:id" element={<UpdateVehicle/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;

import React, { useState } from 'react'
import VehicleService from '../services/VehicleService';
import { useNavigate } from 'react-router-dom';

const AddVehicle = () => {
    const [vehicle, setVehicle] = useState({
        id:"",
        brand:"",
        model:"",
        type:"",
        mfgYear:"",
        vehicleRegnNumber:"",
        dateOfLastServicing:"",
    });
    const navigate=useNavigate();
    const handleChange=(e)=>{
        const value=e.target.value;
        setVehicle({...vehicle,[e.target.name]:value});
    };
    const saveVehicle=(e)=>{
        e.preventDefault();
        VehicleService.saveVehicle(vehicle).then((res)=>{
            navigate("/");
        })
        .catch((error)=>{
            console.log(error);
        });
    };
    const clearForm=(e)=>{
        e.preventDefault();
        setVehicle({
            id:"",
        brand:"",
        model:"",
        type:"",
        mfgYear:"",
        vehicleRegnNumber:"",
        dateOfLastServicing:"",
        });
    }
  return (
    <div className="flex max-w-2xl mx-auto shadow">
        <div className="px-6 py-6">
            <div className="font-sans tracking-wider text-2xl">
                <h1>Add Vehicle Details</h1>

            </div>
            
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Vehicle Brand</label>
                    <input onChange={(e) => handleChange(e)} name="brand" value={vehicle.brand} type="text" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Model</label>
                    <input onChange={(e) => handleChange(e)} name="model" value={vehicle.model} type="text" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Type</label>
                    <select onChange={(e) => handleChange(e)} name="type" value={vehicle.type} className="h-10 w-48 border my-2 px-2 py-2">
                        <option></option>
                        <option>Bike</option>
                        <option>Car</option>
                    </select>

                </div>
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Manufacturing Year</label>
                    <input onChange={(e) => handleChange(e)} name="mfgYear" value={vehicle.mfgYear} type="text" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Vehicle Registration Number</label>
                    <input onChange={(e) => handleChange(e)} name="vehicleRegnNumber" value={vehicle.vehicleRegnNumber} type="text" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4">
                    <label className="block text-gray-800 text-sm font-normal">Last Servicing Date</label>
                    <input onChange={(e) => handleChange(e)} name="dateOfLastServicing" value={vehicle.dateOfLastServicing} type="Date" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4 space-x-4">
                    <button onClick={saveVehicle} className="text-white font-bold bg-green-500 px-2 py-2 rounded my-4 hover:bg-green-700">Save</button>
                    <button onClick={clearForm} className="text-white font-bold bg-red-500 px-2 py-2 rounded my-4 hover:bg-red-700">Clear</button>

                </div>
        </div>
    </div>
  )
}

export default AddVehicle
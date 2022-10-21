import React, { useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import VehicleService from '../services/VehicleService';

const UpdateVehicle = () => {

    const {id}=useParams();

    const [vehicle, setvehicle] = useState({
        id:id,
        brand:"",
        model:"",
        type:"",
        mfgYear:"",
        vehicleRegnNumber:"",
        dateOfLastServicing:"",
    });

    useEffect(() => {
        const fetchdata= async ()=>{
            try{
                const res=await VehicleService.getVehicleById(id);
                setvehicle(res.data);
            }catch(error){
                console.log(error);
            }
          };
          fetchdata();
    }, [])
    


    const navigate=useNavigate();




    const updateVehicle=(e)=>{
        e.preventDefault();
        VehicleService.updateVehicle(vehicle).then((res)=>{
            navigate("/");
        })
        .catch((error)=>{
            console.log(error);
        });
    };

    const handleChange=(e)=>{
        const value=e.target.value;
        setvehicle({...vehicle,[e.target.name]:value});
    };

  return (
    
    <div className="flex max-w-2xl mx-auto shadow">
        <div className="px-6 py-6">
            <div className="font-sans tracking-wider text-2xl">
                <h1>Update Vehicle Details</h1>

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
                    <input onChange={(e) => handleChange(e)} name="dateOfLastServicing" value={vehicle.dateOfLastServicing.slice(0,10)} type="Date" className="h-10 border my-2 px-2 py-2"></input>

                </div>
                <div className="h-14 items-center justify-center w-full my-4 space-x-4">
                    <button onClick={updateVehicle} className="text-white font-bold bg-green-500 px-2 py-2 rounded my-4 hover:bg-green-700">Update</button>
                    <button onClick={(e)=>navigate("/")} className="text-white font-bold bg-red-500 px-2 py-2 rounded my-4 hover:bg-red-700">Cancel</button>

                </div>
        </div>
    </div>
  
  )
}

export default UpdateVehicle
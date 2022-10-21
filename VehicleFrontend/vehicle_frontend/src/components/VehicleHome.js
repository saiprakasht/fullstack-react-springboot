import React, { useEffect, useState } from 'react'
import VehicleService from '../services/VehicleService';
import Vehicle from './Vehicle';

const VehicleHome = () => {
    const [loading, setLoading] = useState(true);
    const [vehicles, setVehicles] = useState(null);
    useEffect(() => {
      const fetchdata= async ()=>{
        setLoading(true);
        try{
            const res=await VehicleService.getVehicle();
            setVehicles(res.data);
        }catch(error){
            console.log(error);
        }
        setLoading(false);
      };
      fetchdata();

    }, []);

    const handleDelete=(e,id)=>{
        e.preventDefault();
        VehicleService.deleteVehicle(id).then((res)=>{
            if(vehicles){
                setVehicles((prevState)=>{
                    return prevState.filter((vehicle)=>vehicle.id!==id);
                })
            }
        })
    }

  return (
    <div className="container my-6">
        <div className='mx-4 my-6 content-center font-bold font-serif' >
            <h1 className='text-lg'>My Vehicle Details</h1>
        </div>
        <div className="mx-4 flex shadow border-b">
            <table className="min-w-full">
                <thead className="bg-blue-100 mx-4">
                    <tr >
                        <th className='text-left px-2 py-2'>Vehicle</th>
                        <th className='text-left px-2 py-2'>Type</th>
                        <th className='text-left px-2 py-2'>Registration Number</th>
                        <th className='text-left px-2 py-2'>Manufacturing Year</th>
                        <th className='text-left px-2 py-2'>Condition</th>
                        <th className='text-left px-2 py-2'>Next Servicing in</th>
                        <th className='text-right px-2 py-2'>Manage</th>
                    </tr>
                </thead>
                {!loading && (
                <tbody>
                    {vehicles.map((vehicle)=>(
                    <Vehicle vehicle={vehicle} handleDelete={handleDelete} key={vehicle.id}/>
                    ))}
                </tbody>
                )}
                
            </table>
        </div>

    </div>
  )
}

export default VehicleHome
import React from 'react'
import { useNavigate } from 'react-router-dom'

const Vehicle = ({vehicle, handleDelete}) => {

    const navigate=useNavigate();

    const handleUpdate=(e,id)=>{
        e.preventDefault();
        navigate(`/updateVehicle/${id}`);

    }

    const handleDate=(d)=>{
        const date1=new Date(d);
        const date2=new Date();
        const diff=date2.getTime()-date1.getTime();
        const daydiff=diff/(1000*3600*24);
        const rd=90-daydiff;
        return Math.round(rd);

    }

  return (
    <tr>
                        <td className='text-left px-2 py-2'>{vehicle.brand} {vehicle.model}</td>
                        <td className='text-left px-2 py-2'>{vehicle.type}</td>
                        <td className='text-left px-2 py-2'>{vehicle.vehicleRegnNumber}</td>
                        <td className='text-left px-2 py-2'>{vehicle.mfgYear}</td>
                        {handleDate(vehicle.dateOfLastServicing)>=30 && (
                            <>
                            <td className='text-left px-2 py-2'>Good</td>
                            <td className='text-left px-2 py-2 text-green-500'>{handleDate(vehicle.dateOfLastServicing)} Days</td>
                            </>
                        )}
                        {handleDate(vehicle.dateOfLastServicing)<30 && handleDate(vehicle.dateOfLastServicing)>=0 && (
                            <>
                            <td className='text-left px-2 py-2'>Need Maintenance</td>
                            <td className='text-left px-2 py-2 text-red-500'>{handleDate(vehicle.dateOfLastServicing)} Days</td>
                            </>
                        )}
                        {handleDate(vehicle.dateOfLastServicing)<0 && (
                            <>
                            <td className='text-left px-2 py-2'>Need Maintenance</td>
                            <td className='text-left px-2 py-2 text-red-500'>Immediate</td>
                            </>
                        )}
                        <td className='text-right px-2 py-2'>
                            <a onClick={(e,id)=>handleUpdate(e,vehicle.id)} className="text-blue-600 hover:text-blue-800 px-4 hover:cursor-pointer">Update</a>
                            <a onClick={(e,id)=>handleDelete(e,vehicle.id)} className="text-blue-600 hover:text-blue-800 px-4 hover:cursor-pointer">Delete</a>
                        </td>

                    </tr>
  )
}

export default Vehicle
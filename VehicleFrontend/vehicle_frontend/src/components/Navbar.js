import React from 'react'
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate=useNavigate();
  return (
    <div className="bg-purple-800 ">
      <div className="h-14 px-4 items-center inline-flex">
        <p className="text-white font-bold">Vehicle Dashboard</p>
        <a className="text-gray-300 font-thin mx-auto px-4" href="/" >Home</a>
        <a className="text-gray-300 font-thin mx-auto px-4" href="/addvehicle" >Add Vehicle</a>
      </div>
    </div>
  )
}

export default Navbar
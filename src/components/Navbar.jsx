import React from 'react'
import { Link } from 'react-router-dom'

export default function Navbar() {
  return (
    <nav className="bg-white h-20 flex items-center justify-between border-primary shadow-md">
 <h1 className='text-2xl'>MixMaster</h1>
 
   
    <div className="flex items-center space-x-2">
     
      <Link to='/' className="capitalize font-normal tracking-widest text-lg px-2 py-1 transition-colors duration-300 hover:text-green-500">
        home
      </Link>
      <Link to='/about' className="capitalize font-normal tracking-widest text-lg px-2 py-1 transition-colors duration-300 hover:text-green-500">
        about
      </Link>
      
    </div>
 
</nav>
  )
}
import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className='cocktail bg-white mb-8 shadow-sm hover:shadow-lg transition-shadow grid grid-rows-[auto_1fr] rounded-lg overflow-hidden ' >
   <div >
    <img className='img-container h-80 w-full object-cover rounded-t-lg' src={image} alt={name} />

   </div>
   <div className="cocktail-footer p-6">
    <h3 className='text-2xl font-bold '>{name}</h3>
    <h4 className='mb-1'>{glass} </h4>
    <p className='text-gray-600 mb-2'>{info}</p>
    <Link to={`/cocktail/${id}`} className='btn capitalize text-white bg-green-500 px-3 py-1 rounded hover:bg-green-700'> 
    details</Link>
   </div>
    </article>
  )
}
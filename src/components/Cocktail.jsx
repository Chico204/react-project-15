import React from 'react'
import { Link } from 'react-router-dom'
export default function Cocktail({ image, name, id, info, glass }) {
  return (
    <article className='cocktail'>
   <div className='img-container'>
    <img src={image} alt={name} />
    
   </div>
    </article>
  )
}
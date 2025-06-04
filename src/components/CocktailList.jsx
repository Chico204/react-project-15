import React from 'react'
import Cocktail from './Cocktail'
import Loading from './Loading'
import { useGlobalContext } from '../context'

export default function CocktailList() {
  const {cocktails, loading} = useGlobalContext()
  if(loading){
    return<Loading/>
  }
  if(cocktails.length < 1){
    return(
      <h2 className='section-title'>
        no cocktails match your search
      </h2>
    )
  }
  return(
   <section className='section py-20'>
    <h2 className='section-title text-2xl capitalize tracking-widest text-center mt-4 mb-14 '>
      cocktails
    </h2>
    <div className='cocktails-center grid gap-8 w-[85vw] max-w-[1170px] mx-auto sm:grid-cols-[repeat(auto-fill,_minmax(338.8px,_1fr))]'>
   {cocktails.map((item)=> {
    return<Cocktail key={item.id} {...item}/>
   })}
    </div>
   </section>
  )
}
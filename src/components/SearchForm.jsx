import React from 'react'
import { useGlobalContext } from '../context'
export default function SearchForm() {
 const { setSearchTerm } = useGlobalContext()
  const searchValue = React.useRef('')
   React.useEffect(() => {
    searchValue.current.focus()
  }, [])

  function searchCocktail() {
    setSearchTerm(searchValue.current.value)
  }
  function handleSubmit(e) {
    e.preventDefault()
  }
  return (
    <section className='section search mt-4 pb-0 py-20 px-0'>
     <form className='serach-form w-[85vw] max-w-[40rem] my-0 mx-auto bg-white py-8 px-10 capitalize rounded shadow-md' onSubmit={handleSubmit}>
      <div className='form-control'>
        <label htmlFor="name" className='block mb-5 font-bold  '> search your favourite cocktail</label>
        <input type="text" name='name' id='name' ref={searchValue} onChange={searchCocktail} className='w-[100%] border-0  rounded bg-[#f1f5f8] p-1 ' />
      </div>
     </form>
    </section>
  )
}
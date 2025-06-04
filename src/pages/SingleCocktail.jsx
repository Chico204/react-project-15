import React from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'

export default function SingleCocktail() {
  const { id } = useParams()
  const [loading, setLoading] = React.useState(false)
  const [cocktail, setCocktail] = React.useState(null)

  React.useEffect(() => {
    setLoading(true)
    async function getCocktail() {
      try {
        const response = await fetch(
          `https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`
        )
        const data = await response.json()
        if (data.drinks) {
          const {
            strDrink: name,
            strDrinkThumb: image,
            strAlcoholic: info,
            strCategory: category,
            strGlass: glass,
            strInstructions: instructions,
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          } = data.drinks[0]
          const ingredients = [
            strIngredient1,
            strIngredient2,
            strIngredient3,
            strIngredient4,
            strIngredient5,
          ]
          const newCocktail = {
            name,
            image,
            info,
            category,
            glass,
            instructions,
            ingredients,
          }
          setCocktail(newCocktail)
        } else {
          setCocktail(null)
        }
      } catch (error) {
        console.log(error)
      }
      setLoading(false)
    }
    getCocktail()
  }, [id])
  if (loading) {
    return <Loading/>
  }
  if (!cocktail) {
    return <h2 className='section-title'>no cocktail to display</h2>
  } else {
    const {
      name,
      image,
      category,
      info,
      glass,
      instructions,
      ingredients,
    } = cocktail
    return (
     <section className='section  cocktail-section'>
        <div className='mt-5 text-center'>
         <Link to='/' className='text-center bg-green-500 p-1 rounded capitalize text-white font-semibold shadow-md hover:bg-green-700'>
        back to home
     </Link></div>
     <h2 className="section-title text-center capitalize p-2 font-semibold text-2xl">
        {name}
     </h2>
     <div className="drink w-[80vw] max-w-[1170px] mx-auto text-left grid-cols-1 gap-0 lg:grid lg:grid-cols-[2fr_3fr] lg:gap-12 lg:items-center">
        <img src={image} alt={name} className='rounded-lg' />
        <div className="drink-info pt-8 lg:pt-0">
            <p className="font-bold capitalize leading-7 mb-2">
                <span className="drink-data mr-2  bg-green-400 p-1 rounded text-green-700">name: </span>{name}
            </p>
             <p className="font-bold capitalize leading-7 mb-2"> 
                <span className="drink-data mr-2  bg-green-400 p-1 rounded text-green-700">category: </span>{category}
            </p>
             <p className="font-bold capitalize leading-7 mb-2">
                <span className="drink-data mr-2  bg-green-400 p-1 rounded text-green-700">info: </span>{info}
            </p>
             <p className="font-bold capitalize leading-7 mb-2">
                <span className="drink-data mr-2  bg-green-400 p-1 rounded text-green-700">glass: </span>{glass}
            </p>
             <p className="font-bold capitalize leading-7 mb-2">
                <span className="drink-data mr-2  bg-green-400 p-1 rounded text-green-700">instructions: </span>{instructions}
            </p>
            <p className="font-bold capitalize leading-7 mb-2">
            <span className="drink-data mr-2 bg-green-400 p-1 rounded text-green-700">ingredients:</span>
            {ingredients.map((item,index)=>{
                return item ? <span key={index}>{item},</span> : null
            })}</p>
        </div>
     </div>
     </section>
    
    )
  }
}
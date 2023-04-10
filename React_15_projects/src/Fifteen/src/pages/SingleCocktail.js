import React, { useEffect } from 'react'
import Loading from '../components/Loading'
import { useParams, Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const SingleCocktail = () => {
  const { oneCocktail, setOneCocktail } = useGlobalContext();
  const { id } = useParams()
  const fetchurl = async () => {
    fetch(`https://www.thecocktaildb.com/api/json/v1/1/lookup.php?i=${id}`).then(response => response.json().then(data => {
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
        setOneCocktail(newCocktail)
      } else {
        setOneCocktail(null)
      }

    }))
  }
  useEffect(() => {
    fetchurl();
  }, [id])
  const { name,
    image,
    info,
    category,
    glass,
    instructions,
    ingredients, } = oneCocktail;
  return (
    <>
      <section className='section cocktail-section'>
        <Link to='/' className='btn btn-primary'>
          back home
        </Link>
        <h2 className='section-title'>{name}</h2>
        <div className='drink'>
          <img src={image} alt={name}></img>
          <div className='drink-info'>
            <p>
              <span className='drink-data'>name :</span> {name}
            </p>
            <p>
              <span className='drink-data'>category :</span> {category}
            </p>
            <p>
              <span className='drink-data'>info :</span> {info}
            </p>
            <p>
              <span className='drink-data'>glass :</span> {glass}
            </p>
            <p>
              <span className='drink-data'>instructons :</span> {instructions}
            </p>
            <p>
              <span className='drink-data'>ingredients :</span>
              {ingredients && ingredients.map((item, index) => {
                return item && <span key={index}> {item}</span>
              })}
            </p>
          </div>
        </div>
      </section>
    </>
  )
}

export default SingleCocktail

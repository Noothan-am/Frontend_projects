import React, { useState, useContext, useEffect, createContext, Children } from 'react'
import { useCallback } from 'react'

const AppContext = createContext();
export const AppProvider = ({ children }) => {
     const [oneCocktail, setOneCocktail] = useState({});
     const [loading, setLoading] = useState(false);
     const [cocktail, setCocktail] = useState([]);
     const [search, setSearch] = useState('a');
     const fetchurl = useCallback(async () => {
          setLoading(true);
          fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?s=${search}`).then(response => {
               response.json().then(data => {
                    const { drinks } = data;
                    if (drinks) {
                         const newCocktails = drinks.map((item) => {
                              const {
                                   idDrink,
                                   strDrink,
                                   strDrinkThumb,
                                   strAlcoholic,
                                   strGlass,
                              } = item

                              return {
                                   id: idDrink,
                                   name: strDrink,
                                   image: strDrinkThumb,
                                   info: strAlcoholic,
                                   glass: strGlass,
                              }
                         })
                         setCocktail(newCocktails);
                         console.log(cocktail);
                    } else {

                         setCocktail('')
                    }
               })
          })
          setLoading(false);
     }, [search])

     useEffect(() => {
          fetchurl();
     }, [search, fetchurl])

     return (
          <AppContext.Provider value={{
               cocktail,
               loading,
               setCocktail,
               setLoading,
               setSearch,
               search,
               setOneCocktail,
               oneCocktail
          }}>
               {children}
          </AppContext.Provider>
     )
}

export const useGlobalContext = () => {
     return useContext(AppContext);
}
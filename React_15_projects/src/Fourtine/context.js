import React, { useContext, useReducer, useEffect } from 'react'
import cartItems from './data'
import reducer from './reducer.js'
const url = 'https://course-api.com/react-useReducer-cart-project'
const AppContext = React.createContext()
let initialState = {
  total: 0,
  amount: 0,
  cart: cartItems,
}

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const fetchurl = async () => {
    fetch(url).then(responce => { responce.json().then(data => { dispatch({ type: 'set-data', payload: data }) }) });
  }
  useEffect(() => {
    fetchurl();
  }, [])

  useEffect(() => {
    dispatch({ type: 'sum-amount' })
  }, [state.cart])

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  )
}
// make sure use
export const useGlobalContext = () => {
  return useContext(AppContext)
}

export { AppContext, AppProvider }

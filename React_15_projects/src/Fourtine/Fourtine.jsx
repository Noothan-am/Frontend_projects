import React from 'react'
import { AppProvider } from './context';
import Navbar from './Navbar'
import CartContainer from './CartContainer'
import './index.css'
function Fourtine() {
  return (
    <AppProvider>
      <main>
        <Navbar />
        <CartContainer />
      </main>
    </AppProvider>

  )
}

export default Fourtine

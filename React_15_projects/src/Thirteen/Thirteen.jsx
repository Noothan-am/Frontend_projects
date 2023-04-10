import React from 'react'
import Navbar from './Navbar';
import Hero from './Hero';
import Sidebar from './Sidebar';
import Submenu from './Submenu';
import './thirteen.css'
import { AppProvider } from './context';
function Thirteen() {
     return (
          <>
               <AppProvider>
                    <Navbar />
                    <Sidebar />
                    <Hero />
                    <Submenu />
               </AppProvider>
          </>
     )
}

export default Thirteen
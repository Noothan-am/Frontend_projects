import React, { useState } from 'react'
import Home from './Home'
import Modal from './Modal'
import Sidebar from './Sidebar'
import { modelContext, sidebarContext } from './Context'
import './index.css'
function Twelve() {
     const [showModel, setModel] = useState(true);
     const [showsidebar, setSidebar] = useState(true);
     return (
          <>
               <modelContext.Provider value={{ showModel, setModel }}>
                    <sidebarContext.Provider value={{ showsidebar, setSidebar }}>
                         <Home />
                         <Modal />
                         <Sidebar />
                    </sidebarContext.Provider>
               </modelContext.Provider>
          </>
     )
}

export default Twelve
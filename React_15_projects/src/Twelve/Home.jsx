import React, { useContext } from 'react'
import { FaBars } from 'react-icons/fa'
import { modelContext, sidebarContext } from './Context';
const Home = () => {
  const { showModel, setModel } = useContext(modelContext);
  const { showsidebar, setSidebar } = useContext(sidebarContext);
  return (
    <main>
      <button className='sidebar-toggle' onClick={() => setSidebar(!showsidebar)}>
        <FaBars />
      </button>
      <button className='btn' onClick={() => setModel(!showModel)} >
        show modal
      </button>
    </main>
  )
}

export default Home

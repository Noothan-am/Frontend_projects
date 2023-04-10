import React, { useState, useRef, useEffect } from 'react'
import { GlobalContext } from './context';

const Submenu = () => {
  const { menu, setSubMenu } = GlobalContext();
  return (
    <aside className={`submenu ${menu && 'show'}`}>
      <section>
        <h4></h4>
        <div className={`submenu-center`}>
        </div>
      </section>
    </aside>
  )
}

export default Submenu

import React, { useContext } from 'react'
import { FaTimes } from 'react-icons/fa'
import { modelContext } from './Context';
const Modal = () => {
  const { showModel, setModel } = useContext(modelContext);
  return (
    <div className={`${showModel ? 'modal-overlay' : 'modal-overlay show-modal'}`}>
      <div className='modal-container' >
        <h3>modal content</h3>
        <button className='close-modal-btn' onClick={() => { setModel(!showModel) }} >
          <FaTimes></FaTimes>
        </button>
      </div >
    </div >
  )
}

export default Modal

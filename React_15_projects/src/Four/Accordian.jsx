import React from 'react'

function Accordian({ title, info, handleClick, toggle }) {
     return (
          <div className='accordian'>
               <div className="title" onClick={handleClick}>
                    <h3>{title}</h3>
                    <h2 style={{ transform: `${toggle ? 'rotate(45deg)' : 'none'}` }}>+</h2>
               </div>
               {/* <div className="info" style={{ display: `${toggle ? 'block' : 'none'}` }}> */}
               <div className="info">
                    {toggle && <p>{info}</p>}
               </div>
          </div >
     )
}

export default Accordian
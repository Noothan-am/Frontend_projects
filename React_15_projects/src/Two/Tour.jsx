import React, { useState } from 'react'
function Tour({ id, name, info, image, price, handleClick }) {
     const [show, setShow] = useState(false);
     const handleShow = () => {
          setShow(!show);
     }
     return (
          <div className='tour_card'>
               <div className="tour_card-img">
                    <img src={image} alt="" />
               </div>
               <div className="tour_card-content">
                    <div className="heading">
                         <h3>{name}</h3>
                         <h3 className="price">{price}</h3>
                    </div>
                    <p className='info'>{show ? info : info.substring(0, 220)}...<span onClick={handleShow} className='showmore'>{!show ? 'show more' : 'show less'}</span></p>
               </div>
               <button onClick={() => { handleClick(id) }}>Not Intrested</button>
          </div>
     )
}

export default Tour
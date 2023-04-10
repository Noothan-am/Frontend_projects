import React from 'react'

function Food({ id, title, category, price, img, desc }) {
     return (
          <>
               <div className="foodCard">
                    <div className="tour_card-img">
                         <img src={img} alt="" />
                    </div>
                    <div className="tour_card-content">
                         <div className="heading">
                              <h3>{title}</h3>
                              <button className="price">${price}</button>
                         </div>
                         <p className='info'>{desc}</p>
                    </div>
               </div>
          </>
     )
}

export default Food
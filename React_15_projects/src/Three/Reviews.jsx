import React from 'react'

function Reviews({ id, name, job, image, text, handleClick, prevclicked, nextclicked }) {
     return (
          <>
               <div className="reviews_card">
                    <div className="img">
                         <img src={image} alt="" />
                    </div>
                    <div className="reviews_content">
                         <div className="heading">
                              <p>{name}</p>
                              <p>{job}</p>
                         </div>
                         <div className="para">
                              {text}
                         </div>
                    </div>
                    <div className="arrows">
                         <button onClick={prevclicked}>prev</button>
                         <button onClick={nextclicked}>next</button>
                    </div>
                    <div className="btn">
                         <button onClick={handleClick}>Surprise me</button>
                    </div>
               </div>
          </>
     )
}

export default Reviews
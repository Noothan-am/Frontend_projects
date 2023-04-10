import React from 'react'
import './card.css'
function Card({img,heading,paragraph}) {
    return (
        <>
            <div className="card">
                <div className="card_img">
                <img src={img} alt="random image" />
                </div>
                <div className="card_content">
                    <h2>{heading}</h2>
                    <p>{paragraph}</p>
                    <p>Read more</p>
                </div>
            </div>
        </>
    )
}

export default Card
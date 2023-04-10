import React from 'react'
import './comp.css'
function Feature(props) {
    return (
        <div className='feature'>
            <div className="feature_bar" />
            <h1 className='feature_heading'>
                {props.title}
            </h1>
            <p>
                {props.discription}
            </p>
        </div>
    )
}

export default Feature
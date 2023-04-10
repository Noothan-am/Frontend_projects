import React, { useState } from 'react'
import Main from './Main'
import passwords from './data'

function Body() {
  
  const [first, setfirst] = useState(passwords)
  const clicked = (name) => {
    const res = passwords.filter((ele) => { return ele.catagory === name })
    switch (name) {

      case 'government':setfirst(res);
        break;

      case 'collage': setfirst(res);
        break;

      case 'website':setfirst(res);
        break;

      case 'random':setfirst(res);
        break;

      case 'personal': setfirst(res);
        break;

      case 'social media': setfirst(res);
        break;

      default: setfirst(passwords);
        break;
    }
  }
  return (
    <div className='d-flex justify-content-evenly'>
      <div className="btn-group-vertical m-3" role="group" aria-label="Vertical button group" style={{height:"33rem"}}>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked() }}>All</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("government") }}>Government</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("collage") }}>Collage</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("website") }}>Websites</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("random") }}>Random</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("personal") }}>Personal</button>
        <button type="button" className="btn  btn-outline-primary fw-bold text-dark" onClick={() => { clicked("social media") }}>Socila Media</button>
      </div>
      <Main object={first} />
    </div>
  )
}

export default Body
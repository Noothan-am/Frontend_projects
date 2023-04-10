import React, { useState } from 'react'
import questions from './data'
import Accordian from './Accordian'
import './four.css'
function Four() {
     const [toggle, setToggle] = useState(false);
     const handleClick = () => {
          setToggle(!toggle);
     }
     return (
          <div className='accordian_card'>
               <div className="heading">
                    <h2>Questions</h2>
               </div>
               <div className="accordians">
                    {questions.map(data => {
                         return <Accordian {...data} toggle={toggle} handleClick={handleClick} />
                    })}
               </div>
          </div>
     )
}

export default Four
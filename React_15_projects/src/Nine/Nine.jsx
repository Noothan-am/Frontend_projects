import React, { useState } from 'react'
import Values from 'values.js'
import Singlelist from './Singlelist';
import './nine.css'
function Nine() {
     const [state, setState] = useState('');
     const shade = new Values("#f15025").all(8);
     const [details, setDetails] = useState(shade);
     function handleSubmit(e) {
          e.preventDefault();
          try {
               const shade = new Values(state).all(8);
               setDetails(shade);
          } catch (error) {
               alert("please enter the valid Hash")
          }
     }
     return (
          <>
               <section className='container'>
                    <h3>color generator</h3>
                    <form onSubmit={handleSubmit}>
                         <input
                              type='text'
                              value={state}
                              onChange={(e) => { setState(e.target.value) }}
                              placeholder='#f15025'
                              className=""
                         />
                         <button className='btn' type='submit'>
                              submit
                         </button>
                    </form>
               </section>
               <section className="colors">
                    {details.map((detail, index) => {
                         return <Singlelist key={index} index={index} {...detail} />
                    })}
               </section>
          </>
     )
}

export default Nine
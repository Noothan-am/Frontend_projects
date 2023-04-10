import React, { useState } from 'react'
import paras from './data'
import './eight.css'
function Eight() {
     const [count, setCount] = useState('');
     const [newCount, setnewCount] = useState('');
     const handleSubmit = (e) => {
          e.preventDefault();
          setnewCount(count);
     }
     return (
          <>
               <section className='section-center'>
                    <h3>tired of boring lorem ipsum?</h3>
                    <form className='lorem-form' onSubmit={handleSubmit}>
                         <label htmlFor='amount'>paragraphs:</label>
                         <input
                              type='number'
                              name='amount'
                              id='amount'
                              value={count}
                              onChange={(e) => setCount(e.target.value)}
                         />
                         <button type="submit" className='btn'>generate</button>
                    </form>
                    <div>{paras.map((para, index) => {
                         if (index < newCount - 1) {
                              return (
                                   <>
                                        <div key={index}>
                                             {para}
                                        </div>
                                        <br />
                                   </>
                              )
                         }
                    })}
                         {paras[0]}
                    </div>
               </section>
          </>
     )
}

export default Eight
import React, { useState } from 'react'
import name from './data'
import './seven.css'
function Seven() {
     const [people, setpeople] = useState(name);
     return (
          <>
               <section className="section">
                    <div className="title">
                         <h2>
                              <span>/</span>reviews
                         </h2>
                    </div>
                    <div className="section-center">
                         {people.map((person, personIndex) => {
                              const { id, image, name, title, quote } = person;
                              return (
                                   <article key={id}>
                                        {/* <img src={image} alt={name} className="person-img" /> */}
                                        <div >
                                             <h4 > {name}</h4>
                                             <p className="title">{title}</p>
                                             <p className="text">{quote}</p>
                                        </div>
                                   // </article>
                              )
                         })
                         }
                    </div>
               </section >

          </>
     )
}

export default Seven
import React from 'react'

function Card({ datas }) {
     return (
          datas.map(data => {
               return (
                    <div className='six-card'>
                         <div className="title">
                              {data.title}
                         </div>
                         <div className="cmpny">
                              {data.company}
                         </div>
                         <div className="date">
                              {data.dates}
                         </div>
                         <div className="list">

                              {data.duties.map(data => {
                                   return (

                                        <>
                                             <li>{data}</li>
                                        </>
                                   )
                              })}
                         </div>
                    </div>
               )
          })
     )
}

export default Card
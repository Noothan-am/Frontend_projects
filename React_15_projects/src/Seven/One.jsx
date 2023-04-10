import React, { useState } from "react";
import { data } from '../One/data'
import './one.css'
function One() {
     const [datas, setData] = useState(data);
     const handleClick = () => { setData([]) }
     return (
          <>
               <div className="main">
                    <h1>{`${datas.length} Birthdays today`}</h1>
                    {datas.map(data => {
                         return (
                              <>
                                   <div className="birthday">
                                        <div className="image">
                                             <img src={data.image} />
                                        </div>
                                        <div className="content">
                                             <h3 key={data.id}>{data.name}</h3>
                                             <p>{data.age} years</p>
                                        </div>
                                   </div>
                              </>
                         )
                    })}
                    <button onClick={handleClick}>Clear All</button>
               </div>
          </>
     )
}

export default One
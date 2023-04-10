import React, { useState } from 'react'
import Reviews from './Reviews'
import datas from './data.js'
import './three.css'
function Three() {
     const [count, setCount] = useState(0);
     const checkNum = (number) => {
          if (number >= datas.length) {
               return 0;
          } else if (number < 0) {
               return datas.length - 1;
          } else {
               return number;
          }
     }
     const handleClick = () => {
          let number = Math.floor((Math.random() * 10) / 2);
          setCount(checkNum(number));
     }
     const prevclicked = () => {
          setCount(checkNum(count - 1));
     }
     const nextclicked = () => {
          setCount(checkNum(count + 1));
     }

     return (
          <>
               <Reviews {...datas[count]} handleClick={handleClick} prevclicked={prevclicked} nextclicked={nextclicked} />
          </>
     )
}

export default Three
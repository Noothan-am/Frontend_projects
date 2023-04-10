import React, { useEffect } from 'react'
import rgbToHex from './utils';
function SingleList({ weight, index, rgb }) {
     const bgcolor = rgb.join(",");
     const hex = rgbToHex(...rgb);
     const clicked = () => {
          navigator.clipboard.writeText(hex);
          alert(`${hex} is copied to clickboard`);
     }
     return (
          <article onClick={clicked} className={`color ${index > 10 && 'color-light'}`} style={{ backgroundColor: `rgb(${bgcolor})` }}>
               <p className='percent-value'>{weight}%</p>
               <p className='color-value'>{hex}</p>
          </article >
     )
}

export default SingleList
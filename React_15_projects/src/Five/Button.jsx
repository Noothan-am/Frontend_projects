import React from 'react'

function Button({ handleClick, categoryes }) {
     return (
          <>
               {categoryes.map((category, index) => { return <button key={index} onClick={() => { handleClick(category) }}>{category}</button> })}
          </>
     )
}

export default Button
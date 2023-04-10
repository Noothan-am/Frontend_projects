import React, { useState } from 'react'
import Button from './Button'
import Food from './Food'
import menus from './data'
import './five.css'
function Five() {
     const [items, setItems] = useState(menus);
     const section = ["all", ...new Set(items.map(item => item.category))];
     const [category, setCategory] = useState(section);
     const handleClick = (category) => {
          if (category === "all") {
               setItems(menus)
               return;
          }
          setItems(menus.filter(item => { return item.category === category }));
     }

     return (
          <>
               <h1>Our menu</h1>
               <div className="section">
                    <Button handleClick={handleClick} categoryes={category} />
               </div>
               <div className="food_cards">
                    {items.map(menu => {
                         return <Food key={menu.id} {...menu} />
                    })}
               </div>
          </>
     )
}

export default Five
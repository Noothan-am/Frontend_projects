import React, { useEffect, useState } from 'react'
import Loading from './Loading'
import Tour from './Tour'
import './two.css'

function Two() {
     const [tours, setTours] = useState([]);
     const [loading, setLoading] = useState(true);
     const fetchurl = async () => {
          fetch('https://course-api.com/react-tours-project').then((response) => { response.json().then(data => setTours(data)) })

     }

     useEffect(() => {
          fetchurl();
          setLoading(!loading);
     }, [])
     console.log(tours)
     // here first below code will render and then useEffect will render so loading page will show first then loading will become
     // false and Tour compnent is showed   
     if (loading) {
          return (
               <Loading />
          )
     }

     const handleClick = (id) => {
          setTours(tours.filter(e => {
               return e.id !== id;
          }))
     }

     if (tours.length === 0) {
          return (
               <>
                    <h1>no clources</h1>
                    <button onClick={fetchurl}>get back</button>
               </>
          )
     }

     return (
          <>
               {/* <Loading /> */}
               <h1>Our Tours</h1>
               {tours.map(tour => {
                    return <Tour key={tour.id} {...tour} handleClick={handleClick} />
               })
               }
          </>
     )
}

export default Two
import React from 'react'
import PswCard from './PswCard'
import Search from './Search'

function PswCards({object}) {
    let cat  = object[0].catagory.toUpperCase();
 return (
        <div className="mx-auto my-1 fw-bolder fs-3 bg-light" style={{width:"85%"}}>
            <Search catogary={cat} />  
            <div className='d-flex flex-row flex-wrap container'>
               { object.map(e=>{
                return <PswCard Websitename={e.websitename} Username={e.username} Password={e.password}/>
                })}
            </div>
        </div>
    )
}

export default PswCards
import React, { useEffect, useState, useMemo } from 'react'
import Card from './Card'
import './six.css'
function Six() {
     const [tabs, setTab] = useState([]);
     const [datas, setData] = useState([]);
     const [value, setvalue] = useState([]);
     const [loading, setLoading] = useState(true);
     const fetchUrl = async () => {
          fetch('https://course-api.com/react-tabs-project').then((response) => { response.json().then(info => { setData(info); setvalue(info) }) })
     }
     useEffect(() => {
          // setLoading(true);
          fetchUrl();
          setLoading(false);
     }, [])
     if (loading) {
          return (
               <>
                    <h1>Loading...</h1>
               </>
          )
     }
     const handleClick = (company) => {
          console.log("data.company");
          setData(datas.filter(data => {
               return company === data.company
          }));
     }
     let companies = [...new Set(datas.map(data => { return data.company }))];

     return (
          <>
               <div className="six">
                    <div className="left_part">
                         {companies.map(tab => { return <button onClick={() => { handleClick(tab) }}>{tab}</button> })}
                    </div>
                    <div className="right_part">
                         <Card datas={datas} />
                    </div>
               </div>
          </>
     )
}

export default Six
import React, {useEffect, useState } from 'react'

const Sidebar = () => {
    const[data, setData] = useState([])

    const FetchData = () =>{
        return fetch('https://fakestoreapi.com/products')
        .then((response) => response.json())
        .then((data)=>setData(data))
    }

    useEffect(() => {
        FetchData();
    },[])


  return (
    <div>
      {
        data.map((item) => (
            <>
            <div class="card text-white bg-primary mb-3" style={{width: "18rem"}}>
            <img class="card-img-top" src={item.image} style={{width: "8rem"}} alt="Card image cap"/>
                <div class="card-body">
                    <h5 class="card-title">{item.title}</h5>
                    <p class="card-text">{item.description}</p>
                    <button type="button" class="btn btn-info">Primary</button>
                </div>
            </div>
            </>
        )) 
      }
    </div>
  )
}

export default Sidebar

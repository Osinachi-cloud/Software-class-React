import React, { useEffect, useState } from 'react'
import { cardData } from '../../data/data'
import { Card } from '../card/Card'
import './main.css'

export const Main = () => {

  const [URL, setURL] = useState(`https://fakestoreapi.com/products`);
  const [products, setProducts] = useState([]);

  const fetchApiProducts = () =>{
      fetch(URL).then((apiSuccessResponse)=>{
        return apiSuccessResponse.json();
      }).then((data)=>{
        setProducts(data);
      }).catch((apiErrorResponse)=>{
        console.log(apiErrorResponse);
      })
  }

  useEffect(()=>{
    fetchApiProducts();
  },[])

  return (
    <>
        <div className="main-container">
            {
                products.map((eachCardObject)=>(
                    <Card
                        key={eachCardObject.id}
                        eachCard={eachCardObject}
                        products= {products}
                />
                ))
            }
        </div>
    </>
  )
}

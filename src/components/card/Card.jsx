import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import './card.css'

export const Card = ({eachCard, products}) => {

  const [product , setProduct] = useState({});

  const getSingleDetails = (selectedId) =>{
    let arr = [...products];
    let product =  arr.find((singleData)=> singleData.id === selectedId);
    setProduct(product);
    console.log(product);
   
  }

  return (
    <>
        <div className="card-container">
            <div className="card-img-wrapper">
                <img src={eachCard.image} alt="" />
            </div>
            <h2>{eachCard.title.substring(0,20)}</h2>
            <h4>${eachCard.price}</h4>
            <p>{eachCard.description.substring(0,50)}</p>
            <Link to={`/products/${eachCard.id}`}>View Details</Link>
            {/* <button onClick={()=> getSingleDetails(eachCard.id)}>View Details</button> */}
        </div>
    </>
  )
}

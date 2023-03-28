import React from 'react'
import './card.css'

export const Card = ({image, title, description, price}) => {
  return (
    <>
        <div className="card-container">
            <div className="img-wrapper">
                <img src="https://images.unsplash.com/photo-1679678691010-894374986c54?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1198&q=80" alt="" />
            </div>
            <h2>{title}</h2>
            <h4>${price}</h4>
            <p>{description}</p>
            <button>Buy Now</button>
        </div>
    </>
  )
}

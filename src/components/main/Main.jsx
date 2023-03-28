import React from 'react'
import { cardData } from '../../data/data'
import { Card } from '../card/Card'
import './main.css'

export const Main = () => {
  return (
    <>
        <div className="main-container">
            {
                cardData.map((eachCardObject)=>(
                    <Card
                        image={eachCardObject.image}
                        title={eachCardObject.title}
                        price={eachCardObject.price}
                        description={eachCardObject.description}
                />
                ))
            }
        </div>
    </>
  )
}

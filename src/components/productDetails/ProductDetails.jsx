import React, { useEffect, useState } from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});

    let URL = `https://fakestoreapi.com/products/${productId}`

    const fetchApi = async ()=> {
        try{
            const apiREesponse = await fetch(URL);
            const data = apiREesponse.json();
            setProduct(await data);

        }catch(error){
        }
    }

    useEffect(()=>{
        fetchApi();
    },[])

  return (
    <>
        <div className='singleDetailsContainer'>
            <div className='productDetails-img-wrapper'>
                <img src={product.image} alt="" />
            </div>
            <div >
                <h1>{product.title}</h1>
                <h3>${product.price}</h3>
                <p>{product.description}</p>
                <div className='rating'>★★★★★</div>
                <button>Pay Now</button>
            </div>

        </div>
    </>
  )
}


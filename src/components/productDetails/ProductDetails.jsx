import React, { useEffect, useState } from 'react'
import './productDetails.css'
import { useParams } from 'react-router-dom'

export const ProductDetails = () => {

    const { productId } = useParams();
    const [product, setProduct] = useState({});
    const [productCount, setProductCount] = useState(0);

    let URL = `https://fakestoreapi.com/products/${productId}`

    const fetchApi = async () => {
        try {
            const apiREesponse = await fetch(URL);
            const data = apiREesponse.json();
            setProduct(await data);

        } catch (error) {
        }
    }

    const increaseProductCount = () =>{
       if(productCount < product.rating.count) setProductCount(productCount + 1);
    }
    const decreaseProductCount = () =>{
       if(productCount > 0) setProductCount(productCount - 1);
    }

    useEffect(() => {
        fetchApi();
    }, [productId])

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
                    <div className='rating'>
                        {
                            new Array((5)).fill('★')
                        }
                        {/* ★★★★★ */}
                    </div>
                    <div className='add-to-cart-box'>
                        <div className="product-qty">
                            <span>Quantity</span>
                            <span onClick={decreaseProductCount} className='product-remove'>-</span>
                            <span>{productCount}</span>
                            <span onClick={increaseProductCount} className='product-add'>+</span>
                        </div>
                    <button>Add to Cart</button>

                    </div>
                </div>

            </div>
        </>
    )
}


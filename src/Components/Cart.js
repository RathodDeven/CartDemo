import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const API_ENDPOINT = 'http://localhost:8000/api/cart/productsFromCartId?'
const qs = new URLSearchParams(window.location.search);
console.log(window.location.search)

const Cart = () => {
  //get search query from url
  const [products,setProducts] = useState([])
  const cartId = qs.get('cartId');
 

  const fetchProductsInfoFromCartId = async(cartId) => {
    
    return await fetch(API_ENDPOINT + new URLSearchParams({cartId}))
      .then(response => {
        console.log(response)

        return response.json()
      })
  }
  const fetchAndShowProducts = async() => {
    try{

      const {data} = await fetchProductsInfoFromCartId(cartId)
      console.log(data)
      setProducts(data.products)
    }catch(error){
      console.log(error)
    }
  }
  useEffect(() => {
    fetchAndShowProducts()
  },[])
  
  return (
    <div>
      <h1>Cart</h1>
    {products && products.map(product => (
     <ProductCard product={product} />
    ))}
    </div>

  )
}

export default Cart
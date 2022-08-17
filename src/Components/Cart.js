import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';

const API_ENDPOINT = 'https://interality-api.herokuapp.com/api/cart/productsFromCartId?'
const qs = new URLSearchParams(window.location.search);
console.log(window.location.search)
// devilopurity
// const clientId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MWZiZTJhY2JmMjk2ZDJlMmE4YTExMjMiLCJjbGllbnRQdWJsaWNLZXkiOiIxWE1nR1NzVjRFIiwiaWF0IjoxNjU5NzkxOTE2fQ.xfUEVXqcn2B8tEx-g4_R1rcGumRhdQkEZMgFOsOBkX8"

// globalinterality
const clientId = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2MjQ4MjBkOWE4MTgxYzRkNTdlYTJmZDMiLCJjbGllbnRQdWJsaWNLZXkiOiJxd1dvUXhybG9LIiwiaWF0IjoxNjYwNzQyNDA2fQ.r2h0j_bHfcWnwnWLnXSnSJsmsNbSrqhsPlmdWz8oWl4"

const Cart = () => {
  //get search query from url
  const [products,setProducts] = useState([])
  const cartId = qs.get('cartId');
 

  const fetchProductsInfoFromCartId = async(cartId) => {
    
    return await fetch(API_ENDPOINT + new URLSearchParams({cartId}), {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': clientId
      }
    })
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
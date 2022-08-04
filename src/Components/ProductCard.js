import React from 'react'

const ProductCard = ({product}) => {
  return (
    <div key={product.id} style={{border: "1px solid black",width: "fit-content", height: "fit-content", padding: "10px", borderRadius: "10px"}} >
        <img src={product.img} alt={product.name} style={{maxWidth: "200px", maxHeight: "400px"}}/>
        <h2>{product.name} </h2>
        <p>{product.price}</p>
        <button>BUY NOW</button>
    </div>
  )
}

export default ProductCard
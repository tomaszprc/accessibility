import React from 'react'
import { Link } from 'react-router-dom'

const ProductItem = ({product}) => {
 
  return (
    <div className="product-item">
      <Link to={`/product/${product.id}`} className="product-more">Read more</Link>

      <img className="product-item-image" src={product.image} alt={product.name} />
      <div className="product-name">{product.name}</div>
      <div className="product-description">{product.description}</div>

    </div> 
  )
}

export default ProductItem

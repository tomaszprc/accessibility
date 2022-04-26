import React, { useContext }from 'react'
import { useParams } from 'react-router-dom'
import { ProductContext } from '../contexts/ProductContext'

const ProductDetails = () => {
  const { id } = useParams()
  const {products} =  useContext(ProductContext)
  const product = products.filter(product => product.id.toString() === id)
  console.log(product)

  return (
    <div className="details">
      <img className="product-detail-image" src={product[0].image} alt={product[0].name} />
      <div className="product-detail-name">{product[0].name}</div>
      <div className="product-detail-description">{product[0].description}</div>
    </div> 
  )
}

export default ProductDetails

import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'
import ProductItem from '../components/ProductItem'
import { useSpeechRecognition } from 'react-speech-recognition'
import { useNavigate } from 'react-router-dom';

const Products = () => {
  let navigate = useNavigate();
  const {products} =  useContext(ProductContext)

  const commands = [
    {
      command: ['Open *'],
      callback: (voice) => {
        const productId = products.filter(product => product.name.toLowerCase() === voice.toLowerCase())

        if (productId !== undefined) {
          navigate(`/product/${productId[0].id}`)
        }
      }
    }
  ]

  const { browserSupportsSpeechRecognition } = useSpeechRecognition({
    commands,
  })

  return (
    <div className="products">
    {!browserSupportsSpeechRecognition && <span>Przeglądarka nie wspiera sterowania głosem</span>}
    {products.map(product => <ProductItem product={product} key={product.id}/>)}
    </div>
  )
}

export default Products

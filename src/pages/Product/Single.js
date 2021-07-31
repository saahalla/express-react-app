import react from 'react'
import axios from 'axios'
import { useHistory, useParams } from 'react-router-dom'

const Single = () => {
  const history = useHistory()
  const { productId } = useParams()
  const [product, setProduct] = react.useState({
    name: '',
    price: 0,
    stock: 1,
    status: true
  }) 

  react.useEffect( () => {
    axios.get(`http://localhost:3004/product/${productId}`)
    .then(response => {
      const { status, message, data } = response.data
      if(status === true){
        setProduct(data)
      }else{
        alert(message)
      }
    })
    .catch(error => {
      alert(error)
    })
  })

  return <>
    <h2>Halaman Single Product</h2>
    {product && <>
      <p>Name: {product.name} </p>
      <p>Price: {product.price} </p>
      <p>Stock: {product.stock} </p>
      <p>Status: {product.status ? 'on': 'off'} </p>
    </>}
    <button onClick={() => history.push('/products') }>
      &laquo; Back
    </button>
  </>
}

export default Single
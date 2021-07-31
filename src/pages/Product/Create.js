import react from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const Create = () => {
  const history = useHistory()
  const [product, setProduct] = react.useState({
    name: '',
    price: 0,
    stock: 1,
    status: true
  })

  const handleChange = (e, name) => {
    const value = e.target.value
    setProduct({...product, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post('http://localhost:3004/product', product)
      const {status, message} = response.data

      if(status === true) {
        alert(message)
        history.push('/products')
        
      }else{
        alert(message)
      }
    } catch (error) {
      alert('Network error')
    }
  }

  return <>
    <h2>Halaman Form Create Product</h2>
    <form>
      <label>Name</label>
      <input type="text" size={50} value={product.name} onChange={(e) => handleChange(e, 'name')} />

      <label>Price</label>
      <input type="number" value={product.price} onChange={(e) => handleChange(e, 'price')} />

      <label>Stock</label>
      <input type="number" size={30} value={product.stock} onChange={(e) => handleChange(e, 'stock')} />
      
      <label>Status</label>
      <select value={product.status} onChange={(e) => handleChange(e, 'status')} >
        <option value={false}>Off</option>
        <option value={true}>On</option>
      </select>

      <button onClick={handleSubmit}>Submit</button>

    </form>

    <button onClick={() => history.push('/products')}>&laquo; Back</button>
  </>
}

export default Create


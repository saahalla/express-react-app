import react from 'react'
import axios from 'axios'
import { useHistory } from 'react-router-dom'

const List = () => {
  const [products, setProducts] = react.useState([])
  const history = useHistory()

  react.useEffect( () => {
    axios.get('http://localhost:3004/products')
    .then(response => {
      const { status, message, data } = response.data
      if(status === true){
        setProducts(data)
      }else{
        alert(message)
      }
    })
    .catch(error => {
      alert(error)
    })
  }, [])

  const handleDelete = async(id) => {
    if(window.confirm('Yakin mau dihapus?')) {
      try {
        const response = await axios.delete(`http://localhost:3004/product/${id}`)
        const {message, status} = response.data
        
        if(status === true){
          const newData = products.filter(el => el._id != id)
          setProducts([...newData])
          alert(message)
          // history.push('/products')
        }else{
          alert(message)
        }

      } catch (error) {
        alert('Network Error')
      }
    }
  }

  return <>
    <h2>Halaman List Product</h2>
    <button onClick={() => history.push('/product/create')}>Add Product</button>
    <table>
      <thead>
        <th>Name</th>
        <th>Price</th>
        <th>Stok</th>
        <th>Action</th>
      </thead>
      <tbody>
        {products && products.map((product, index) => {
          return <tr key={index}>
            <td><a href={`product/single/${product._id}`}>{product.name}</a></td>
            <td className="center">{product.price}</td>
            <td className="center">{product.stock}</td>
            <td className="center">
              <button onClick={() => history.push(`product/update/${product._id}`)}>Update</button>
              <button onClick={() => handleDelete(product._id)}>Delete</button>
            </td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}
export default List
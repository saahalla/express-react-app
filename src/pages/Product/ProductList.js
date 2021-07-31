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

  return <>
    <h2>Halaman List Product</h2>
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
            <td>{product.name}</td>
            <td className="center">{product.price}</td>
            <td className="center">{product.stock}</td>
            <td className="center"><button onClick={() => history.push(`product/single/${product._id}`)}>Detail</button></td>
          </tr>
        })}
      </tbody>
    </table>
  </>
}
export default List
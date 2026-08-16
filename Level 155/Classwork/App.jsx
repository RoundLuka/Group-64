import { useState } from 'react'
import Register from './components/Register'
import { db } from './config/auth'
import { getDocs, collection } from 'firebase/firestore/lite';

function App() {
  const [products, setProducts] = useState([]);

  const productCollectionRef = collection(db, 'products');

  useEffect(() => {
    // get all products from firestore base
    // set them to be our products state

    async function getAllProducts () {
      try {
        const data = await getDocs(productCollectionRef)
        setProducts(data)
      } catch(err) {
        console.error(err)
      }
    }
    getAllProducts()
  }, [])

  return (
    <>
      <Register />

      <div>
        {products.map((prod) => {
          return <p>prod.name</p>
        })}
      </div>
    </>
  )
}

export default App

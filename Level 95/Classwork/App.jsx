import { useState, useEffect } from "react";


// Container component - არის js კოდიც და ფუნქციონალი
// Presentational component - არის ისეთი კომპონენტი რომელიც შექმნილია მხოლოდ და მხოლოდ ელემენტების დასრენდერებლად


const ratingStyles = {
  'display': 'flex'
}

// Presentational component
function Product({product}) {
  return (
    <div>
      <h3>{product.title}</h3>
      <p>${product.price}</p>
      <p>description: {product.description}</p>
      <p>category: {product.category}</p>
      <div style={ratingStyles}>
        <p>rate: {product.rating.rate}</p>
        <p>count: {product.rating.count}</p>
      </div>
    </div>
  )
}

function App() { 
  const [info, setInfo] = useState([]);

  useEffect(() => {
    async function fetchInfo() {
      const response = await fetch('https://fakestoreapi.com/products')
      const data = await response.json()
      setInfo(data);
    } 
    fetchInfo()
    console.log(info)
  }, []);

  return (
    <>
      <h1>Products</h1>
      <div className="products">
        {info.map((item, index) => {
          return (
          <>
            <Product product={item} />
            <hr />
          </>
        )
        })}
      </div>
    </>
  )
}

export default App;
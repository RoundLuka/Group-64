import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

export default function Products () {
    const [product, setProducts] = useState([]);

    const { id } = useParams();

    async function fetchInfo () {
        try {
            const response = await fetch(`https://fakestoreapi.com/products/${id}`);
            const data = await response.json();
            setProducts(data)
        } catch (error) {
            console.log("error")
        }
    }

    useEffect(() => {
        fetchInfo()
    }, [])

    return (
        <main>
            <div style={{ border: "1px solid black"}}>
                <h2>{product.title}</h2>
                <p>Price: {product.price}</p>
                <p>Description: {product.description}</p>
            </div>
        </main>
    )
}
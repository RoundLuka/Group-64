const express = require("express");

const app = express()


// route - defined way of how server has to respond to request with specific method type and path

// routing - process of registering routes to response different kind of requests

/* 

1) შექმენით express-ით სერვერი და ჩართეთ. გააკეთეთ 3 route, ყველა უნდა იყოს get სახის მეთოდის შემდეგ მისამართებზე: '/', '/about', '/conctact' თითოეულზე მოიფიქრეთ რაიმე მესიჯი რომელსაც ჩაწერეთ res.send()

*/

const products = [
    {
        id: 0,
        title: "Smart Phone",
        price: 1500
    },
    {
        id: 1,
        title: "Smart Watch",
        price: 200
    },
    {
        id: 2,
        title: "Mac Book",
        price: 2000
    }
]


app.get('/', (req, res) => {
    res.status(200).json({message: "hi"})
})

// /products/4 - უნდა დააბრუნოს ერთი კონკრეტული პროდუქტი თუ არსებობს
// /products - return all products


// dynamic routing

// route for product with specficied id
app.get("/products", (req, res) => {
    res.status(200).json(products)
})

app.get("/products/:id", (req, res) => {
    const {id} = req.params;
    
    const foundProduct = products.find(p => p.id === parseInt(id))
    
    if(!foundProduct) {
        return res.status(404).send("Product with requested id doesn't exist")
    } 
    
    res.status(200).json(foundProduct)
})

app.post("/products", (req, res) => {
    const {name, price} =  req.query;

    if(!name || !price) {
        return res.status(404).send("Couldn't add product, not specified info")
    }

    const product = {
        id: products.length + 1,
        name,
        price: parseFloat(price)
    }

    products.push(product)

    res.status(201).send("Product succesfully added")
})

app.delete("/products/:id", (req, res) => {
    const {id} = req.params;

    const productIndex = products.findIndex(p => p.id === parseInt(id));
    if(productIndex === -1) {
        return res.status(404).send("Error: couldn't find the product to delete it")
    } 

    products.splice(productIndex, 1)

    res.status(202).send('Delete request approved, the product was removed')
})


app.listen(3000, () => console.log("Server listening on port 3000"))
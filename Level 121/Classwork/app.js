// npm install express - აყენებს express მოცემულ დირექტორიაში
// npm install nodemon - ყველგან გლობლაურად აყეენბს nodemon ბრძანებას

// დავაიმპორტეთ express-ის ბიბლოთეკა
const express = require("express");


// სერვერის შექმნა express-ის გამოყენებით
const app = express();


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


// შემომავალ get მეთოდის მოთხოვნის დამუშავების ლოგიკა '/products' ბილიკზე
app.get("/products", (req, res) => {
    res.json(products)
})


app.get('/products/:id', (req, res) => {
    const { id } = req.params;

    const itemFound = products.find((prod) => prod.id === Number(id))

    if(itemFound) {
        res.status(200).json(products[id])
    }
    res.status(404).json({message: "item with requested id doesn't exist"})
})

app.delete('/products:id', (req, res) => {
    const { id } = req.params;

    const startIndex = products.find((prod) => prod.id === Number(id))

    products.slice(startIndex, 1)


    console.log(products)
    res.end("successfully deleted")
})


app.listen(3000, () => console.log("Listenining on port 3000"))
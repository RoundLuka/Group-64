const http = require('http');

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

// request - მოთხოვნა
// response - პასუხი

const getInfo = (req, callback) => {
    let body = '';

    req.on('data', chunk => {
        body += chunk.toString()
    })

    req.on('end', () => {
        callback(JSON.parse(body))
    })
}

const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET": // ინფორმაციის გამოთხოვა
            return res.end(JSON.stringify(products));
        
        case "POST": // ინფორმაციის დამატება
            getInfo(req, (newProduct) => {
                products.push(newProduct);
                res.end(JSON.stringify(products))
            })
            break;

        case "PUT": // ინფორმაციის განალახება
            getInfo(req, (updatedProduct) => {
                
                // შევამოწმოთ (მოვახდინოთ ვალიდაცია) კლინეტის მიერ გამოგზავანილი ობიექტი თუ შეიცავს საჭირო ინფრომაციას

                if (Object.keys(updatedProduct).length !== 3) {
                    res.end("Invalid PUT request, the object doesn't contain valid info")
                }

                const found = products.find((prod) => prod.id === updatedProduct.id)

                if (!found) res.end("Item couldn't be found")
                
                // ობიექტის ინფორმაცია არ იცვლება
                if (found.title === updatedProduct.title && found.price === updatedProduct.price) {
                    res.end("You aren't providing new data for the object")
                }
                
                products[products.indexOf(found)] = updatedProduct;
                res.end(JSON.stringify(products))
            })
            break;
        
        case "DELETE":
            getInfo(req, (idObj) => {
                if (!idObj.id) res.end("Invalid argument, please provide object with id of the product to be removed")

                const toBeDeletedArr = products.filter((prod) => prod.id === idObj.id)

                if(toBeDeletedArr.length === 0) res.end("Such item doesn't exist")

                products.splice(products.indexOf(toBeDeletedArr[0]), 1)
                res.end(JSON.stringify(products))
            })
    }
})

server.listen(3000, () => console.log("Server listening on port 3000"))

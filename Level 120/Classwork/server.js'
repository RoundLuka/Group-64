let products = [
    {
        id: 1,
        title: "Laptop",
        price: 1200,
        forSale: true
    },
    {
        id: 2,
        title: "PC",
        price: 2500,
        forSale: false
    },
    {
        id: 3,
        title: "SmartPhone",
        price: 1000,
        forSale: true
    }
]


const http = require("http")
const fs = require("fs");

const port = 3000;


const server = http.createServer((req, res) => {
    switch (req.method) {
        case "GET":
            res.end(JSON.stringify(products))
        
        case "POST":
            let body = ""
            req.on('data', (chunk) => {
                body += chunk.toString()
            })

            req.on("end", () => {
                fs.appendFile("./Data/requests.txt", body, (err) => {
                    console.log(err)
                })

                res.end("Request sent")
            })
    }
})


server.listen(port, () => console.log(`Listening on port ${port}`))
// const http = require('http')

// let port = 3000;

// console.log(http.METHODS) 

// const server = http.createServer((req, res) => {
//     res.write(req.method)

//     // get, post, delete, put
    
//     res.end()
// })

// server.listen(port, () => console.log("Listening on port 3000") )

// const http = require('http');

// const server = http.createServer((req, res) => {
//     const myUrl = new URL(req.url);
//     res.write(`Hostname ${myUrl.hostname}`)
//     res.write(`Path: ${myUrl.pathname}`)
//     res.write(`Query ${myUrl.searchParams}`)
//     res.end()
// });

// server.listen(8080, () => {
//     const { address, port } = server.address();
//     console.log(`Server is listening on: http://${address}:${port}`);
// })



const http = require('http');

const server = http.createServer((req, res) => {
    const { method } = req;

    switch (method) {
        case "GET":
            res.write("GET")
            res.end()
        case "POST":
            res.write("POST")
            res.end()
        case "PUT":
            res.write("PUT")
            res.end()
        case "DELETE":
            res.writeHead(200, {"Content-Type": "text/plain"})
            res.write("DELETE")
            res.end()
        default:
            res.writeHead(404)
    }
})

server.listen(3000, () => console.log("Running server on port 3000"))

const http = require("http")
const fs = require("fs")


const server = http.createServer((req, res) => {
    
    fs.readFile("index.html", "utf-8", (error, data)  => {
        if (error) {
            res.writeHead(404)
            res.write("Incorrect file name")
        } else {
            res.writeHead(200)
            res.write(data)
        }
        res.end()
    })
});

server.listen(3000, (error) => {
    console.log("Listening")
})
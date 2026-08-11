const express = require("express");
const cors = require("cors");
const { Server } = require("socket.io");

const io = new Server(3000, {
    cors: ['http://localhost:5173']
})

io.on("connection", (socket) => {
    console.log(`New client connected to the server's socket. ID: ${socket.id}`)
    
    socket.on('message', (msg) => {
        io.emit('receive', msg)
    })
})


const app = express();


// -app.listen(3000, () => console.log("Server is running on port 3000"))
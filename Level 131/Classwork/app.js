const express = require("express");
const app = express()


const users = [
    {"username":"luka","email":"luka@gmail.com","password":"1234","id":1778006655066},
    {"username":"nikolozi","email":"nikoloza@gmail.com","password":"321","id":1778432712768},
    {"username":"test","email":"test@gmail.com","password":"1","id":1779212477485}
]


app.get("/",(req, res) => {
    console.log("ran")
    res.status(200).json(users)
})

app.listen(3000, () => console.log("server started"))
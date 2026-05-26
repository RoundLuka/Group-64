const express = require("express");

const app = express();

app.use((req, res, next) => {
    console.log(`Request with method ${req.method} recived`)
    res.something = 'wyeyer'
    next();
})

app.get("/", (req, res) => {
    console.log(res.something)
    console.log("/ path was requested by get method")
    res.status(200).json({message: "/ path was requested by get method"})
})


app.listen(3000, () => console.log("run"))
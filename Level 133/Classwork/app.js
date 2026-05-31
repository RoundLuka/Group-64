// const express = require("express");

// const app = express();

// app.use((req, res, next) => {
//     console.log(`Request with method ${req.method} recived`)
//     res.something = 'wyeyer'
//     next();
// })

// app.get("/", (req, res) => {
//     console.log(res.something)
//     console.log("/ path was requested by get method")
//     res.status(200).json({message: "/ path was requested by get method"})
// })


// app.listen(3000, () => console.log("run"))


// app.use(middlewareLogger)

// app.use((req, res, next) => {
//     if(req.query.admin === "true") {
//         next()
//     } else {
//         console.log("no access")
//         res.send("no acccess")
//     }
// })

// app.get("/", (req, res) => {
//     console.log("home")
//     res.status(200).send("Home page")
// })

// app.get("/users", (req, res) => {
//     console.log("users")
//     res.status(200).json({users: []})
// })

// function middlewareLogger(req, res, next) {
//     console.log("before")
//     next()
//     console.log("after")
// }

const express = require("express");
const morgan = require('morgan');
const { createWriteStream } = require('fs')

const app = express();

// Log to console
app.use(morgan('dev'));

// Log to file
app.use(morgan('combined', { stream: createWriteStream('./app.log', { flags: 'a' }) }))

function authentication(req, res, next) {
    console.log("authentication")
    next()
}

function get(req, res, next) {
    console.log("get data")
    res.status(200).send("wrete")
}

// function post(req, res, next) {
//     console.log("post data")
//     res.status(200).send("wrete")
// }

app.get("/", authentication, get)
// app.post("/", authentication, post)

app.listen(3000, () => console.log("listening on port 3000"))
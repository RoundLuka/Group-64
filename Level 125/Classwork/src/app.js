const express = require("express");
const cors = require("cors");
const { readFile, writeFile } = require("./util/file");
const app = express();

app.use(cors({
    origin: 'http://localhost:5173'
}))

app.use(express.json())

// Route
app.post('/signup', (req, res) => {
    const {username, email, password} =  req.body;

    if(!username || !email || !password) {
        return res.status(400).json({message: "All of the fields are required", success: false})
    }
    const users = readFile();

    const alreadyExists = users.find(account => account.email === email || account.username === username)

    if(alreadyExists) {
        return res.status(400).json({message: "Account with same credentials (username, email) already exists", success: false})
    }

    writeFile(
        {
            username,
            email,
            password,
            id: Date.now()
        }
    )
    res.status(201).json({message: "Account created succesfuly", success: true})
})


app.listen(3000, () => console.log("Server is running and listening port 3000"))
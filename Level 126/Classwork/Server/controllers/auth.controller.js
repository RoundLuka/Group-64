const { readFile, writeFile } = require("../util/file");

const path = require('path');

const FILE_URL = path.join(__dirname, "../Database/users.json")

const signup = (req, res) => {
    const {username, email, password} =  req.body;

    if(!username || !email || !password) {
        return res.status(400).json({message: "All of the fields are required"})
    }
    const users = readFile(FILE_URL);

    const alreadyExists = users.find(account => account.email === email || account.username === username)

    if(alreadyExists) {
        return res.status(400).json({message: "Account with same credentials (username, email) already exists"})
    }

    writeFile(
        {
            username,
            email,
            password,
            id: Date.now()
        }, FILE_URL
    )
    res.status(201).json({message: "Account created succesfuly"})
}

const login = (req, res) => {
    const { email, password } = req.body;

    if(!email || !password) {
        return res.status(400).json({message: "All of the fields are required"})
    }

    const users = readFile(FILE_URL);
    
    const correctInfo = users.find(user => user.email === email && user.password === password)

    if(!correctInfo) {
        return res.status(401).json({message: "Credentials are incorrect"})
    }

    res.status(201).json({...correctInfo, password: undefined})
}

module.exports = {
    signup,
    login
}
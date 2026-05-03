const { FILE } = require('dns');
const fs = require('fs');
const path = require('path');

const FILE_URL = path.join(__dirname, "../Database/users.json")

// absoulute path
// relative path

const readFile = () => {
    const data = fs.readFileSync(FILE_URL, 'utf8')
    return JSON.parse(data)
}

const writeFile = (user) => {
    const currentUsers = readFile();
    currentUsers.push(user)
    fs.writeFileSync(FILE_URL, JSON.stringify(currentUsers), 'utf8')
}

readFile()

module.exports = {
    readFile,
    writeFile
}
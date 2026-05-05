const { FILE } = require('dns');
const fs = require('fs');


const readFile = (fileName) => {
    const data = fs.readFileSync(fileName, 'utf8')
    return JSON.parse(data)
}

const writeFile = (user, fileName) => {
    const currentUsers = readFile(fileName);
    currentUsers.push(user)
    fs.writeFileSync(fileName, JSON.stringify(currentUsers), 'utf8')
}

readFile()

module.exports = {
    readFile,
    writeFile
}
// const events = require("events")

// const emitter = new events.EventEmitter()

// emitter.on("luksevent", (data) => {
//     console.log(`${data} event`)
// })

// emitter.emit("luksevent", "luka")


// standard input

// process.stdin.on('data', (userInput) => {
//     console.log(userInput.toString())
// })

// console.log("Welcome to number guessing game, you must guess a number 1 through 10!\n")

// const numbers = ["1", "2", "3", "4", "5", "6", "7", "8", "9"]
// let secretValue = String(Math.floor(Math.random() * 10))

// function playGame (input) {
//     input = input.toString().trim()

//     if (input === 'quit') {
//         console.log("Ok. Bye!\n")
//         process.exit()
//     }


//     if (!numbers.includes(input))  {
//         console.log("You choose a numbe from 1 through 10!\n Is the number ...")
//     } else if (input === secretValue) {
//         console.log(`You guessed the number!\n The number was ${secretValue}`)
//         process.exit()
//     } else {
//         console.log("You didn't guesss the number!\n Is the number ...")
//     }
// }



// process.stdin.on("data", playGame)

// const { Buffer } = require("buffer");

// let myBuffer = Buffer.alloc(5, "d");

// console.log(myBuffer.toString('utf-8', 1, 3))


// const buffer = Buffer.from('hello');
// console.log(buffer); // Prints: <Buffer 68 65 6c 6c 6f>

// let myList = [Buffer.from("wewr"), Buffer.from("wertery")]

// console.log(Buffer.concat(myList))


const fs = require('fs');

// 3 არგუმენტი:
// 1. ფაილის მისმართი (path)
// 2. encoding character format (interpretation)
// 3.  ფუნქცია რომელიც წაიკითხავს მონაცემებს


fs.readFile('./Data/info.txt', 'utf8', (err, data) => {
    if (err) {
        throw err;
    }
    console.log(data)
})

fs.writeFile('./Data/reply.txt', "hello i reply to info", (err) => {
    if (err) {
        throw err;
    }
    console.log("Reply written in file successfuly")
})

fs.appendFile('./Data/reply.txt', "\n new information added hi im luka!", (err) => {
    if (err) {
        throw err;
    }
    console.log("Information succcesfully appended")
})


process.on("uncaughtException", (error) => {
    if (error) {
        console.log(`Some error occured ${error}`)
    }
})
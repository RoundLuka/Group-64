// let events = require("events");

// listener
// let emitter = new events.EventEmitter();


// // onClick, addEventListener
// emitter.on("lukaEvent", (data) => {
//     console.log(`Luka event happened, argument was ${data}`)
// })


// // click
// emitter.emit("lukaEvent", "blablab")


process.stdin.on('data', (userInput) => {
    let input = userInput
    console.log(input)
});


process.stdin.on('data', (inputedData))
// for(let i = 0; i < 10; i++) {
//     console.log(`Hello World Count: ${i}`)
// }

// const numArr = [11, 12, 13, 14, 15, 16, 17, 19, 20, 21]

// let total = 0;

// for(number of "numArr") {
//     console.log(number)
// }


// for(let i = 0; i < 30; i += 2) {
//     if(i % 2 == 0) {
//         console.log("Even")
//     }
// }
// for of - საიტერაციო ობიექტის ელემენტბს
// for in - საიტერაციო ობიექტის ინდექსებს

let attempts = 3;
let password;

while (password !== "123") {
    if(attempts === 0) {
        alert("No more attempts")
        break
    }

    password = prompt("Enter your password")

    if(password === "123") {
        alert("Login successful")
    } else {
        attempts--;
        alert("Invalid password, try again! You have " + attempts + " attempts left!")
    }

}
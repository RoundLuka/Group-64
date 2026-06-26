// let apiKey = "2a4256cdc8f295a14762fb79c5eb822d"

// fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`)


// let usernames = ["Luka", "Nika"]

// usernames = [...usernames, "Tarieli"]

// console.log(usernames)

// let person = {
//     num: 5
// }

// console.dir({})

// let string = "aedter"

// console.log(string.indexOf("a"))

// function alphabetWar(fight)
// {
  
//   let field = ""
  
//     if(fight[0] !== "*") {
//         field += fight[0] 
//     }
    
//     for(let i = 1; i < fight.length - 1; i++) {
//         if(fight[i + 1] === "*") {
//         continue
//         } else if(fight[i - 1] === "*") {
//         continue
//         }
        
//         field += fight[i]
//     }
    
//     const leftSide = "|sbpw"
//     const rightSide = "|zdqm"
    
//     let leftScore = 0;
//     let rightScore = 0;
    
//     for(let char of field) {
//         if(leftSide.includes(char)) {
//         leftScore += leftSide.indexOf(char)
//         } else if(rightSide.includes(char)) {
//         rightScore += rightSide.indexOf(char)
//         }
//     }
    
//     console.log(leftScore)
    
//     if(leftScore > rightScore) {
//         return "Left side wins!"
//     } else if (rightScore > leftScore) {
//         return "Right side wins!"
//     } else {
//         return "Let's fight again!"
//     }
// }

// alphabetWar("wedt ertreteter")

function twistedSum(n) {
  let total = 0;
  
  for(let num = 1; num <= n; num++) {
    let numString = num.toString();

    for(let digit of numString) {
      total += parseInt(digit)
    }
  }
  return total;
}

console.log(twistedSum(5))
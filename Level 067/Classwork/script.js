// let isStudent = true;
// let isLicensed = true;

// if (isStudent) {
//     console.log("User is authorized")
//     if (isLicensed) {
//         console.log("User is special guest")
//     }
// }

// let balance = 100;

// if (balance > 200) {
//     console.log("User has enough balance ✅")
// } else {
//     console.log("User doesn't have enough balance ❌")
// }

let examScore = prompt("Enter your exam score")
let activityScore = prompt("Enter finals score")

let finalScore = parseInt(examScore) + parseInt(activityScore)

if (finalScore >= 90) {
    console.log("A")
} else if (finalScore >= 80) {
    console.log("B")
} else if (finalScore >= 70) {
    console.log("C")
} else if (finalScore >= 50) {
    console.log("D")
} else if (finalScore >= 30) {
    console.log("E")
} else {
    console.log("F")
}



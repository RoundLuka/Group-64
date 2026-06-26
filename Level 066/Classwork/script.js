// const notInput1 = document.getElementById("not1");
// const notResult = document.getElementById("notres");
// const notBtn = document.getElementById("notSubmit");

// notBtn.onclick = function() {
//     let value1 = notInput1.checked;
//     let res = !value1;
//     notResult.textContent = `Result: ${res}`
// }

// const andInput1 = document.getElementById("and1") 
// const andInput2 = document.getElementById("and2")
// const andBtn = document.getElementById("andSubmit");
// const andResult = document.getElementById("andres");

// andBtn.onclick = function() {
//     let value1 = andInput1.checked;
//     let value2 = andInput2.checked;
//     let result = value1 && value2;
//     andResult.textContent = `Result: ${result}`
// }

// const orInput1 = document.getElementById("or1")
// const orInput2 = document.getElementById("or2")
// const orBtn = document.getElementById("orSubmit")
// const orRes = document.getElementById("orres")

// orBtn.onclick = function() {
//     let value1 = orInput1.checked;
//     let value2 = orInput2.checked;

//     let res = value1 || value2
//     orRes.textContent = `Result: ${res}`
// }


// let x = 12
// let y = String(x)
// console.log("He knows " + y + " programming langauges")

function is_odd(num) {
if (num % 2 == 0) {
console.log(`Number ${num} is even`)
} else {
console.log(`Number ${num} is odd`)
}
}

is_odd(10)
is_odd(13)
is_odd(12)
is_odd(11)
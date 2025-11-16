// let myDigit = 3
// let myData = `Luka${myDigit}`;

// Hoisting

// arrow function ანონმიური ფუნქცია js

// const doubleNumber = (n) => {
//     return n * 2;
// }

// let doubleNumber = (n = 2) => n * 2

// console.log(doubleNumber())


// const test = (a, b = 3, c = 42) => {
//     return a + b + c;
// }
// console.log(test(5)); //50 

// console.log("Luka1");
// console.log("Luka2");
// console.log("Luka3");

// const productsContainer = document.getElementById("products");

// function renderData(arr) {
//     for(let product of arr) {
//         console.log(product)
//         productsContainer.innerHTML += `
//         <div>
//             <h3>${product.title}</h3>
//             <b>Category: ${product.category}</b>
//             <p>${product.description}</p>
//             <img src="${product.image}">
//             <button>${product.price}</button>
//             <hr>
//         </div>
//         `
//     }
// }

// async function fetchData() {
//     const response = await fetch("https://fakestoreapi.com/products");
//     console.log(response)
//     const data = response.json()

//     renderData(data)
// }

// fetchData()


// async function greet() {
//     let awaitingData = new Promise((resolve, reject) => {
//         resolve()
//     })

//     let data = await awaitingData;
//     console.log('executing finished')
// }

// greet()

// setTimeout(greet, 2000)

// console.log("hi")

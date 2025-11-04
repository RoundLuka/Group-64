// const product = {
//     productName: "Vegetable",
//     price: 25,
//     mass: 5,
//     date: "2026-07-29",
//     buyProduct: function() {
//         console.log(`${product.productName} was sold`)
//     }
// }

// console.log(product.buyProduct())


// constructor ფუნქცია
// function Task(title, desc, state, deadline) {
//     this.title = title;
//     this.desc = desc;
//     this.state = state,
//     this.deadline = deadline,
//     this.complete = function() {
//         this.state = !this.state
//     }
// };

// // 1 object
// let homework = new Task("Homework", "Group 64 level 61, 62, 63 web development", false, "2025-12-10")

// let classwork = {
//     title: "Classwork"
// }
// console.log(classwork.title)

function bornYear() {
    return 2025 - this.age;
}

function person(name, age) {
    this.name= name;  
    this.age = age;
}

const p = new person("A", 22)

console.log(p.yearOfBirth())

// შექმენით for ციკლი რომლითაც გაიგებთ რიცხვებს 0-იდან 10-ის ჩათვლით, თქვენი 
// დავალებაა მასივში დაამატოთ ობიექტი, ობიექტში უნდა გქონდეთ 2 კუთვნილება 
// პირველი value (რიცხვი), მეორე type (აქ გაუწერთ ლუწია თუ კენტი)
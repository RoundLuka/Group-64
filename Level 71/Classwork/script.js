// literal გზით შექმნილი ობიექტი
// const Lua = {
//     name: "Lua",
//     dynamic: true,
//     type: 'Interperted'
// }

// function Language(name, dynamic, type) {
//     this.name = name;
//     this.dynamic = dynamic;
//     this.type = type;
// }

// constructor-ის დახმარებით შექმნილი ობიექტები
// const c = new Language('C', false, 'Compiled')
// const js = new Language('Javascript', true, 'Interpreted')


// let myNumber = 15;

// let NewNumber = myNumber;

// myNumber = 20;

// let person = {
//     firstName: "James",
//     gender: "Male"
// }

// let newPerson = person;
// newPerson.firstName = "Mark"

// console.log(person)

// primitive (პრიმიტიული) მნიშვნელობებია: number, string, boolean
// complex (კომპლექსური) მნიშვნელობებია: function, object, array

// memory leak - მეხსირების გაჟონვ

// function doTask() {
//     doTask()
// }

// doTask()

// javascript-ს აქვს მეხსირების garabage collection სისტემა
// აქვს მეხსირების management

// function numData(num, even) {
//     this.number = num,
//     this.even = even
// }

// let numberObjects = [];

// for(let i = 0; i < 10; i++) {
//     let even = i % 2 === 0;
//     const newObject = new numData(i, even)
//     numberObjects.push(newObject);
// };

// console.log(numberObjects)

// let num1 = 5;
// let num2 = 10;
// let num3 = 15;
// let num4 = 20;

// პირდაპირი გზა მასივის შესაქმნელად - literally
let numbers = [5, 10, 15, 20];
// // index      0   1   2    3

// function Array() {

// }

// console.dir([])

// ობიექტის კონსტრუქტორის მეშვეობით მასივის შექმნა - constructor
// let numbersArr = new Array(1, 2, 3, 4, 5, "Luka", false)

// numbersArr[1] = "two";
// console.log(numbersArr[20])

// let newArr = new Array();

// manually - ხელით ელემენტების დამატება

// newArr[0] = "JS"
// newArr[1] = "Java"
// newArr[2] = "SQL"
// newArr[3] = "PHP"
// console.log(newArr)

// let Arr = {
//     0: 5,
//     1: 6,
//     2: 7,
// }

// console.dir([])

// let namesArr = ["Luka", "Nika", "Giorgi", "Tarieli", "Miriani", "Nika", "Tornike", "Vako", "Lazare", "Demetre"];

// console.log(namesArr.length) // სიგრძეს
// console.log(namesArr.at(3)) // ელემენტს მოცემულ ინდექსზე
// namesArr.pop() // 
// namesArr.shift(namesArr)
// namesArr.unshift("Erekle")

// let someNames = namesArr.slice(2, 6)
// console.log(someNames)

// // namesArr.splice(2, 5)

// console.log(namesArr.indexOf("Miriani"))
// console.log(namesArr.lastIndexOf("Nika"))
// console.log(namesArr.includes("Tamazi"))
// console.log(namesArr.find(function(value, index, array) {
//     return value === "Giorgi"
// }))

// console.log(namesArr.indexOf(function(value, index, array) {
//     return value === "Giorgi"
// }))

// console.log(namesArr)
// // unshift

// pop
// shift
// unshift
// slice
// splice
// indefOf
// lastIndexOf
// includes
// find
// findIndex

6) შექმენით ფუნქცია სახელად manualSlice რომელსაც გადაეცემა პირველი მასივი და ორი რიცხვი საწყისის ინდექსი და დასასრულის ინდექსი, თქვენი დავალებაა გადმოცემული ინდექსიდან მეორე ინდექსამდე ჩამოაჭრათ სიას ნაწილიდა დააბრუნოთ ფუნქციიდან გამოიყენეთ for ციკლი

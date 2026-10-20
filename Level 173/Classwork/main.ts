// type numStr = string | number;

// let currentBalance: numStr = 3400;
// currentBalance = "esrye"

// interface person {
//     firstName: string,
//     lastName: string
// }

// const lukaPerson: person = {
//     firstName: 'luka',
//     lastName: "gurgenidze"
// }


// let data: any = true
// data = 'wetw'
// data = 5

// extension superset of javascript

// let balance: number = 500
// balance = 300

// typescript მოელოდება იმას რომ ფუნქციის არგუმენტები იქნება
// ყოველთვის ერთი და იგივე ტიპის

// type numStr = string | number

// function addNums(num1: numStr, num2: number): number {
//     return num1 + num2;
// }

// interface person {
//     firstName: string,
//     age: number
// }

// const account1: person = {
//     firstName: "wetw",
//     age: 123   
// };

// function greeting(user = "luka"): string {
//     if (Math.random() > 0.5) {
//         return 5
//     } else {
//         return "wetw"
//     }
// }  

// greeting()
// greeting("Nika")

// const doSomething = (num1: number, name: string): boolean => {
//     return true
// }

// void - სიცარიელე
// როდესაც ფუნქცია არაფერს არ აბრუნებს ასეთი დროს
// დასაბრუნებელი ტიპი არის void


// function addNumbers(num1: number, num2: number): void {
//     return num1 + num2;
// }

// console.log(addNumbers(3, 4))

// optional parameter ?
// function greetUser(username = "Luka"): void {   
//     if(username) {
//         console.log(`Welcome ${username}`)
//     } else {
//         console.log("Welcome Guest")
//     }
    
// };

// greetUser("Luka")
// greetUser()


// type annotation
// let city: string = "Samtredia"
// let playerLevel: number
// playerLevel = 5

// let hasKey = true

// hasKey = true
// hasKey = false

// const totalLength = (word1: string, word2: string): number => {
//     return word1.length + word2.length
// }

// console.log(totalLength("Lazare", "Vako"))

/* 
1) შექმენით 3 ცვლადი typescript-ში: რიცხვის, სტრინგის და ბოლეანის. 
შემდეგ შექემენით arrow ფუნქცია რომელიც 2 სტრინგის სიგრძეს დაამატებს და 
დააბრუნებს. რათქმა ყველან აუცილებელია ტიპის ანოტაცია (:ტიპი)
*/

// let age: number = 25;
// let city: string = "gori";
// let isRaining: boolean = false;


// typescript-ის მასივი ბუნერივად შექმნილი
// როდესაც ბუნებრივად ვქმნით თავდაპირველ მასვიში თუ არ დაფიქსირდა რაიმე ტიპი
// და მომავალში ვცდი ასეთის მასივში ჩაწერას შეცდომა იქნება
// let names:  = ["Demetre", "Nika", "Vako", "Lazare", "Simona", "Nugzara", true, 252]

// // tuple
// let companyInfo: [string, boolean, number] = ["GOA", true, 500]

// console.log(companyInfo)

// let countries = ["Ireland", "Georgia", "Great Britain", "France", "Belgium", "Poland", "Portugal"]

// function addNums(...nums: number[]): number {
    
// }

// let firstName = "Luka"
// let lastName: string;
// lastName = "Gurgenidze"


// type boolString = boolean | string | [];

// let state: boolString = "pending";
// state = true

// type narrowing - typescript-ს თვისებაა როდესაც მას შეუძლია
// ნებსმიერ დროს, კოდის ნებისმიერ ადგილას წინასწარ იცოდეს ცვლადის ტიპი

// function processData(info: number | string): string | number {
//     if(typeof info == "number") {
//         // აქ info რიცხვია
//         return info
//     } else {
//         // აქ info სტრინგია
//         return info.toLowerCase()
//     }
// }

// console.log(processData(5))
// console.log(processData("LUKA"))

// let programmingTechs: strong = ["AI", "Game Dev", "Web Dev", 10, 235]

// literal type 
// type sides = "Left" | "Right" | "Bottom" | "Top"

// let walkingDirection: sides = "Right"

// enum

// enum Direction {
//     NORTH = "North",
//     SOUTH = "South",
//     WEST = "West",
//     EAST = "East"
// }

// let wind: Direction = Direction.EAST

// enum Rank {
//     Private,
//     Coporal,
//     Sergeant,
//     Lietenaunt,
//     Captain,
//     Major,
//     Colonel,
//     General,
// }

// let ryan: Rank = Rank.Private;
// let Gregor: Rank = Rank.Major
// let america: Rank = Rank.Captain


// console.log(ryan)
// console.log(Gregor)
// console.log(america)

// generics

// type academy<T> = {
//     title: T,
//     CEO: T,
//     students: T[]
//     mentor: [T, T, T, number, boolean]
// }

// // pattern
// let goa: academy<number> = {
//     title: 5,
//     CEO: 5,
//     students: [5, 5],
//     mentor: [5, 5, 5, 2, true]
// }

// function generateArray<T>(item: T, amount: number): T[] {
//     let arr = []
//     for(let i = 0; i < amount; i++) {
//         arr.push(item)
//     }
//     return arr;
// }

// console.log(generateArray<string>("twetwe", 5))
// console.log(generateArray<boolean>(true, 8))
// console.log(generateArray(12, 8))

enum genre {
    Colonization = "Colonization", 
    Soviet = "Soviet",
    Samurai = "Samurai",
    Medival = "Medival",
    Scifi = "Sc-fi",
    Western = "western"
}

let youngWashington: genre = genre.Colonization;
let jesseJamesAssisnationByRobertFord: genre = genre.Western;



// let namesMap = new Map(
//     [
//         ["Luka", 4],
//         [true, 5],
//         [5, 3]
//     ]
// )

// namesMap.delete("Luka")
// namesMap.set("Giorgi", true)
// namesMap.has(true)
// namesMap.get("Luka")
// // namesMap.clear()
// console.log(namesMap.keys())
// console.log(namesMap.values())
// console.log(namesMap.entries())

// console.log(namesMap)

// let mySet = new Set([2, 235,2, 5, 5])
// mySet.add(7)
// mySet.delete(2)
// console.log(mySet.has(235))
// mySet.clear()
// console.log(mySet.size)
// console.log(mySet.values())
// console.log(mySet)

// javascript runs 1 thread


// promise აქვს 3 მდგომარეობა
// თავიდან ყოველთის არის pending
// გარკვეული დროის შემდეგ შეიძლება promise ობიექტის 
// წარმატებით დასრუელბა -> resolve 
// ან წარუმატებლობა -> reject

// try {
//     let promise = new Promise((resolve, reject) => {
//     let internetRequest = true;
    
//     setTimeout(() => {
//         if(internetRequest === true) {
//             resolve("Promise sucess")
//         } else {
//             reject("Rejected, failed")
//         }
//     }, 3000);
// })
// } catch {
//     console.log("Error promise rejected")
// }


// setInterval(() => {
//     console.log(promise)
// }, 500)


// let promise = new Promise((resolve, reject) => {
//     let a = 1
//     setTimeout(() => {
//         if(a == 1) {
//             resolve("Message success")
//         } else {
//             reject("message fails")
//         }
//     }, 2000);
// })

// promise
//     .then((message) => console.log(message))
//     .catch((error) => console.log(error))


// api-იდან ვითხოვ ინფორმაციას fetch ფუნქციის მეშვეობით
// ამ პროცესს დრო სჭირდება და იქმნება promise ობიექტი ავტომატურად
// let promise = fetch("https://jsonplaceholder.typicode.com/todos")

// promise
//     .then((response) => response.json())
//     .then((data) => console.log(data))
//     .catch((error) => console.log(error))

// json ინფრომაციას მოითხოვს
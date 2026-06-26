// const registerForm = document.getElementById("register");

// const firstName = registerForm.elements.FirstName
// const lastName = registerForm.elements.LastName 
// const email = registerForm.elements.Email 
// const password = registerForm.elements.Password

// firstName.value = "Luka"
// firstName.style.backgroundColor = "Green"
// firstName.style.borderRadius = "25px"

// console.dir(firstName)

// const Fighter = {
//     name: "Samurai",
//     Health: 150,
//     Damage:  30,
//     Speed: 15,
//     Level: 20,
//     isCursed: true,
//     attack: function (opponent) {
//         console.log(`Dealt 30 damage to ${opponent}`)
//     }
// }

// console.log(`Fight name: ${Fighter.name}`)
// console.log(Fighter.Health)
// console.log(Fighter.Damage)
// console.log(Fighter.Speed)
// console.log(Fighter.Level)
// console.log(Fighter.isCursed)
// Fighter.attack("Ninja")

// const productItem = {
//     productName: "Gaming chair",
//     isSold: false,
//     price: 1500
// }

const Fighter = {
    name: "Samurai",
    Health: 150,
    Damage: 100,
    Speed: 30,
    opponetHealth: 100, 
    attack: function (opponet) {
        opponet.Health = opponet.Health - Fighter.Damage
        console.log(`Dealt ${Fighter.Damage} damage to ${opponet.Name}`)
        console.log(`Opponent current health ${opponet.Health}`)
    }
}


const Viking = {
    Name: "Samurai",
    Health: 250,
    Damage: 100,
    Speed: 30,
    opponetHealth: 100, 
    attack: function (opponet) {
        opponet.Health = opponet.Health - Viking.Damage
        console.log(`Dealt ${Fighter.Damage} damage to ${opponet}`)
        console.log(`Opponent current health ${opponet.Health}`)
    }
}


console.log(Fighter.Health)
console.log(Fighter.Damage)
console.log(Fighter.Speed)
console.log(Fighter.name)
Fighter.attack(Viking)

console.log(typeof Viking)
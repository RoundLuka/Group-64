// let nameInput = "Luka"
// let inputField = "Username"

// let account = {
//     [inputField]: nameInput,
//     password: "we53er56r",
//     balance: 500,

//     deposit(amount) {
//         this.balance += amount
//     }
// }


// account.deposit(50)
// account.deposit(25)

// console.log(account)


// let person = {
//     firstName: "Luka",
//     balance: 120
// }

// let {balance, lastName} = person
// console.log(firstName)
// console.log(balance)
// // let personAccount = Object.assign(account, person)

// console.log(personAccount)

// let dataArr = ["wetwer", "w5t3e4ter", "rdyufghikty"];

// let [pass1, pass2, pass3] = dataArr;
// console.log(pass1)
// console.log(pass2)
// console.log(pass3)


// const obj = {one: 1, two: 2};
// let {one:first, two:second} = obj;
// console.log(one);

// let dataArr = ["wetwer", "w5t3e4ter", "rdyufghikty"];


// // rest operator
// function any(first, ...rest) {
//     console.log(`first: ${first}`)
//     console.log(`other ${rest}`)
// }

// any(6, 23, 3, 5, 2, 1)

// // spread operator

// let numsArr = [11, 36, 356]

// // 
// let data = [67, numsArr, 17, 439]
// console.log(data)

// class Account {
//     accounts = 0;

//     constructor(firstName, lastName, email, password, balance) {
//         this.firstName = firstName
//         this.lastName = lastName
//         this.email = email
//         this._password = password
//         this.balance = balance
//         Account.accounts += 1;
//     }

//     static getAccounts() {
//         console.log(Account.accounts)
//     }

//     deposit(amount) {
//         this.balance += amount;
//     }

//     get password() {
//         return this._password;
//     }
// }

// let account1 = new Account("John", "Doe", "anything@mail.com", "1234", 100)
// let account2 = new Account("Luka", "Gurgenidze", "luka@mail.com", "luka1234", 200)

// Account.getAccounts()

// account2.deposit(500)


// console.log(account1)

// console.log(account2.password)


let turtle = new Animal("turtle")

class Animal {
    constructor(fname) {
        this.fname = fname
    }
}

class Dog extends Animal {
    constructor(fname, breed) {
        super(fname)
        this.breed = breed
    }

    sound() {
        console.log("Bark!")
    }
}

class Cat extends Animal {

    sound() {
        console.log("Meow!")
    }
}
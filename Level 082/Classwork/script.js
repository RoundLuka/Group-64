// const form = document.querySelector("form");
// const div = document.querySelector('div');

// const accounts = [];

// class Account {
//     // #password;
//     // static #accounts = [];

//     constructor(fname, lname, email, password) {
//         this.firstName = fname
//         this.lastName = lname
//         this.email = email
//         this.password = password
        

//         // setPassword({
//         //     firstName: fname,
//         //     lastName: lname,
//         //     email: email,
//         //     password: password,
//         // })
//     }

//     // static setPassword(curt) {
//     //     Account.#accounts.push(this)
//     // }

//     // static displayAccounts() {
//     //     console.log(Account.#accounts)
//     // }
// }

// form.addEventListener("submit", (e) => {
//     e.preventDefault();

//     let firstName = form.elements.firstName.value;
//     let lastName = form.elements.lastName.value;
//     let email = form.elements.email.value;
//     let password = form.elements.password.value;

//     let account = new Account(firstName, lastName, email, password)
//     accounts.push(account)
// })

// setInterval(() => {
//     console.log(accounts)
// }, 3000)

// class BankAccount {
    // constructor(balance) {
    //     balance(balance)
    // }

    // set balance(amount) {
    //     if(balance > 0) {
    //         this._balance = amount
    //     }
    // }

    // deposit(amount) {
    //     if(amount > 0) {
    //         this._balance += amount;
    //         console.log("deposited successfully")
    //     } else {
    //         console.log("can't deposit negative amount")
    //     }
    // } 

    // withdraw(amount) {
    //     if(amount > 0 && amount <= this.balance) {
    //         this.balance -= amount
    //         console.log("withdrawal sucessful")
    //     }
    // }

    // get balance() {
    //     return this._balance
    // }


// let account1 = new BankAccount(50)

// account1.deposit(150)
// account1.deposit(25)
// account1.deposit(75)
// account1.withdraw(100)

// console.log(account1.balance())
// const myDiv = document.querySelector("div")
// const btn = document.querySelector('button')

// function clickHandler(e) {
//     console.log(e.currentTarget)
// }


// addEventListener-ის მესამე პარამეტრი განსაზღვრავს თუ საიდან დაიწყება მოვლნების დარეგისტრირება
// თუ მესამე პარამეტრი არ გვაქვს default-ად იგულისხმება false
// false მოვლენის დარეგისტრირება იწყება შიდა ობიექტებიდან (bubbling)
// true - მოველნის დარეგისტრირება ხდება მშობელი ობიექტებიდან (capturing)

// btn.addEventListener("click", clickHandler)

// myDiv.addEventListener("click", clickHandler)


// const myForm = document.querySelector("form")


// myForm.addEventListener("submit", function(e) {
//     e.preventDefault()

//     let username = myForm.elements.username.value;
//     let email = myForm.elements.email.value;
//     let pass = myForm.elements.pass.value;
// })
//     let notContainsDigit = true;
    
//     const digits = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]

//     for(let i = 0; i < pass.length; i++) {
//         if(digits.includes(pass[i])) {
//             notContainsDigit = false;
//         }
//     }

//     if(username.length <= 4 || username.includes(" ")) {
//         alert("Invalid username, must be at least 5 characters and not a space")
//     } else if (pass.length < 8 ) {
//         alert("Password must contain at least 8 characters, ")
//     } else if (notContainsDigit) {
//         alert("Password must contain digit")
//     } else {
//         confirm("Account created successfuly")
//     }
// })

// localStorage.setItem - ამატებ ობიექტის სახით ინფორმაციას ლოკალურ საცავში
// localStorage.removeItem - შლი ინფორმაციას
// localStorage.getItem - მოგაქვს ინფორმაცია

const registration = document.getElementById("registration")
const login = document.getElementById("login")

registration.addEventListener("submit", function(e) {
    
    e.preventDefault()

    let username = registration.elements.username.value;
    let email = registration.elements.email.value;
    let pass = registration.elements.pass.value;

    localStorage.setItem("username", username)
    localStorage.setItem('email', email)
    localStorage.setItem("password", pass)
})

login.addEventListener("submit", function(e) {
    e.preventDefault();

    let username = login.elements.user.value;
    let pass = login.elements.passwrd.value;

    let registeredUsername = localStorage.getItem("username")
    let registeredPassword = localStorage.getItem("password")

    if(username === registeredUsername && pass === registeredPassword) {
        document.body.innerHTML += `
            <h2>Welcome ${username}</h2>
        `
    } else {
        alert("Wrong credentials")
    }
})
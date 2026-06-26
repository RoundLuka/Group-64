// ფორმიდან შემოტანილი ინფორმაცია შევინახოთ ობიექტის სახით   

const form = document.querySelector("form");
const submitBtn = document.getElementById("submitBtn");

const name = form.elements.username;
const email = form.elements.email;
const password = form.elements.password;

let dataBase = [];


submitBtn.onclick = function() {
    const account = {
        username: name.value,
        email: email.value,
        password: password.value
    };

    name.value = "";
    email.value = "";
    password.value = "";

    dataBase.push(account);
};

console.log(dataBase);

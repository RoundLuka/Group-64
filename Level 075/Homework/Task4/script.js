const myForm = document.querySelector("form");
const sendBtn = document.querySelector("button")
const dataTable = document.querySelector("table")

const usernameField = myForm.elements.username;
const emailField = myForm.elements.email 
const telField = myForm.elements.telephone

// container ფუნქციის დანიშნულებაა ინფორმაცის წამოღება, დამუშავება
// presentional ფუნქციის დანიშნულებაა შედეგის ვიზიალურად გამოტანა


function presentational(data) {
    
    dataTable.innerHTML += `
    <tr>
        <td>${data.username}</td>
        <td>${data.email}</td>
        <td>${data.telephone}</td>
    </tr>

    `
}

function container() {
    let usernameValue = usernameField.value;
    let emailValue = emailField.value;
    let telephoneValue = telField.value;
    
    let person = {
        username: usernameValue,
        email: emailValue,
        telephone: telephoneValue
    };

    myForm.reset()

    presentational(person)
}


sendBtn.onclick = container

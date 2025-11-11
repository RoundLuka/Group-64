
// ელემენტს (ყველა HTML ელმენტი არის ობიექტი) აქვს 3 ტიპის თვისება
// 1. კუთვნილება (HTML ატრიბუტი, CSS სტილი)
// 2. მეთოდები (ფუნქციონალი)
// 3. მოვლენა (რაღაცის მოხდენა რაც კავშირშია ამ ელემენტან)

// ყველა ელემენტის თვისებას მივწვდებით დოტ ნოტაციის გამოყენებით

// addEventListener - მეთოდი ამატებს მოვლენის მსმენელეს ელემენტში

// function handleChange() {
    
// }

// window

// let messageField = document.querySelector("textarea")
// let displayStats = document.querySelector('p')

// function keydownHandler() {
//     let symbolCount = messageField.value.length;

//     if(symbolCount < 200) {
//         displayStats.style.color = 'green'
//         displayStats.textContent = `${symbolCount}/200`
//     } else {
//         displayStats.style.color = 'red'
//         displayStats.textContent = 'Character limit exceeded'
//     }
// }

// bubbling - ასეთი ტიპის მოვლენის მსმენლსი დამგრებისას, მოვლენის მსმენელი მოვლენას შიდა ელემენტიდან იწყებს ესეიგი თვლის რომ მოვლენა მოხდა იმ ელემენტზე რომელზეც დავჭირდეთ ეს ელემენტი სხვა ბევრი ელემენტის შიდა ელემენტიც რომ იყოს

// capturing - ასეთი მოვლენის მსმენლი თვლის რომ მოვლენა გაეშვეა მშობელი ელემენტიდან
// 


// messageField.addEventListener('keydown', keydownHandler, false)

const myForm = document.querySelector("form");
const usernameField = myForm.elements.username;
const pass = myForm.elements.password;

myForm.addEventListener('submit', function() {

}) 

myForm.removeEventListener('submit')
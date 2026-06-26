// object.children 

// ყველა ობიექტი შედგება 3 თვისებისგან:
// 1. კუთვნილება
// 2. მეთოდები
// 3. მოვლენა

// dom (document object model) - გვერდზე არსებული ყველა ობიექტი და მეთოდი ჩაშნებულია dom-ში და ხელისწმოვდებია მხოლოდ მისი გამოყენებით 


// const container = document.querySelector("div");
// const link = container.previousElementSibling;

// console.log(link)


// const products = document.getElementsByTagName("div");

// const products = document.getElementsByClassName("product");

// console.log(products)

const product1 = document.getElementById("product1");
console.log(product1.hasChildNodes())
console.log(product1.childNodes)

// console.log(product1)

// getElementsByTagName, getElementsByClassName, previousElementSibling, nextgElementSibling, firstChild, lastChild

// //finds element by id
// document.getElementById(id)

// //finds elements by class name
// document.getElementsByClassName(name)

// //finds elements by tag name
// document.getElementsByTagName(name)
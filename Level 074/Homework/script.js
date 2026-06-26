// 2) შექმენით shopping-ის გვერდი, თქვენ თავიდან გექნებათ პროდუქტების მასივი, რომელშიც იქნება ყველა პროდუქტი რომელსაც ყიდით ობიექტის სახით მოცემული, თქვენი ამოცანაა რომ ეს ყველა პროდუქტი გამოიტანოთ გვერდზე js-ის მეშვეობით, უნდა იყოს კალათა რომელშიც მომხმარბელს შეეძლება პროდუქტის დამატება

const productsContainer = document.getElementById("productscontainer")
const productCart = document.getElementById("productcart")


const products = [
    {name: "product1", price: 100, desc: "ery tr4yrtyrtytry rtytryr"},
    {name: "product2", price: 200, desc: " eryert yrty rtyrrtyrt"},
    {name: "product3", price: 300, desc: " eryerttyeryetyry r"},
    {name: "product4", price: 400, desc: "eryeryert yertytryrt"},
]

for (let i = 0; i < products.length; i++) {
    let currentProduct = products[i];

    let productDiv = document.createElement("div");
    let productTitle = document.createElement("h2");
    productTitle.textContent =  currentProduct.name;

    let productDesc = document.createElement("p")
    productDesc.textContent = currentProduct.desc;

    let price = document.createElement("p");
    price.textContent = `price ${currentProduct.price}`

    let addBtn = document.creatElement("button");
    addBtn.textContent = "Add to cart";
    addBtn.onclick = function () {
    const newItem =  document.createElement("li");
    newItem.textContent = `Product name: ${product.name}, price: ${product.price}`;
    productCart.appendChild(newItem);
    }

    let productImg = document.createElement("img");
    productImg.style.width = '200px';
    productImg.style.height = '200px';


    productDiv.appendChild(productTitle);
    productDiv.appendChild(productDesc);
    productDiv.appendChild(price);
    productDiv.appendChild(productImg);
    productDiv.appendChild(addBtn);

    productDiv.style.border = "1px solid red";

    productsContainer.appendChild(productDiv)
}
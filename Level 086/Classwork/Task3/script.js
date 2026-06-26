const cryptoSearch = document.querySelector("input")
const form = document.querySelector("form")
const result = document.getElementById("result")


async function fetchCrypto(e) {
    e.preventDefault()

    let crypto = (cryptoSearch.value).trim().toLowerCase();

    const response = await fetch(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=${crypto}`)

    const data = await response.json()

    cryptoSearch.value = "";
    renderInfo(data)
}

function renderInfo(arr) {
    let data = arr[0]

    result.innerHTML = `
        <h2>${data.id}</h2>
        <p>Current price ${data.current_price}</p>
        <p>24h change: ${data.price_change_24h}</p>
        <img src="${data.image}" />
    `
}

form.addEventListener("submit", fetchCrypto)
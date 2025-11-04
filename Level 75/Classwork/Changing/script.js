// const box1 = document.getElementById("box1")
// const par = document.getElementById("par")

// // let htmlText = document.createTextNode("Some text")
// // box1.parentNode.removeChild(box1)

// par.removeChild(box1)


const box1 = document.getElementById("box1")
const bTag = document.getElementById("strong1") 

const i = document.createElement("i")
i.textContent = 'Storng'

box1.replaceChild(i, bTag)
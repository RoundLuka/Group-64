const images = [
    "http://www.sololearn.com/uploads/slider/1.jpg", 
    "http://www.sololearn.com/uploads/slider/2.jpg", 
    "http://www.sololearn.com/uploads/slider/3.jpg"
]; 



const sliderImg = document.getElementById("slider");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let imgNumber = 0;

function nextHandler() {
    imgNumber++;

    if(imgNumber >= images.length) {
        imgNumber = 0;
    }

    sliderImg.src = images[imgNumber]
}


function prevHandler() {
    imgNumber--;

    if(imgNumber < 0) {
        imgNumber = images.length - 1;
    }

    sliderImg.src = images[imgNumber]
}

prevBtn.addEventListener("click", prevHandler);

nextBtn.addEventListener("click", nextHandler)


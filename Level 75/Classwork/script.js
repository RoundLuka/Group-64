const childDiv = document.getElementById("child");

let positionX = 0;
let poistionY = 0;
let direction = "right"

function Animate() {
    if(direction === "right") {
        positionX++;
        if(positionX >= 150) {
            direction = "bottom"
        }
    }

    if(direction === "bottom") {
        poistionY++;
        if(poistionY >= 150) {
            direction = "left"
        }
    }
    
    if(direction === "left") {
        positionX--;
        if(positionX <= 0) {
            direction = "top"
        }
    }

    if(direction === "top") {
        poistionY--;
        if(poistionY <= 0) {
            direction = "right"
        }
    }

    childDiv.style.left = `${positionX}px`
    childDiv.style.top = `${poistionY}px`
}


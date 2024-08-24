const colors = ["green", "red", "blue", "white", "black", "orange", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(){
    const randomNumber = getRandomNumber();
    changeBackgroundColor(randomNumber)
}

// The code idea is "change color" so if it send the same color, than it will call changeColor again
function changeBackgroundColor(newColor){ 
    let bgColor = document.body.style.backgroundColor;
    if(colors[newColor] != bgColor){
        document.body.style.backgroundColor = colors[newColor];
        color.textContent = colors[newColor];
        return;
    }
    changeColor();
}

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
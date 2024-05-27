const colors = ["green", "red", "blue", "white", "black", "orange", "yellow"];
const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', changeColor);

function changeColor(){
    const randomNumber = getRandomNumber();
    changeBackgroundColor(randomNumber)
    
}

function changeBackgroundColor(newColor){
    document.body.style.backgroundColor = colors[newColor];
    color.textContent = colors[newColor];
}

function getRandomNumber(){
    return Math.floor(Math.random()*colors.length);
}
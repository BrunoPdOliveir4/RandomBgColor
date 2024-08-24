const hex = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 'A', 'B', 'C', 'D', 'E', 'F'];
const bnt = document.getElementById('btn');
const color = document.querySelector('.color');

function changeColor (){
    let hexColor = '#';
    for(let i=0;i<6;i++){
        hexColor += hex[getRandomNumber()];    
    }
    let currentColor = getContent();
    
    if(currentColor != hexColor){
        color.textContent = hexColor;
        document.body.style.backgroundColor = hexColor
        return;
    }
    changeColor();
};

function getRandomNumber() {
    return Math.floor(Math.random()*hex.length);
}



function getContent(){
    let bgValue = document.body.style.backgroundColor;
    if(bgValue == '') bgValue = "rgb(255,255,255)"; //Default is white
    bgValue = formatRGBContent(bgValue);
    let bgValueHex = transformHEX(bgValue);
    bgValue = "#";
    bgValueHex.forEach(value => {
        bgValue += value;
    });
    return bgValue;
}

function formatRGBContent(value){
    value = value.replace("rgb", "");
    value = value.replace("(", "");
    value = value.replace(")", "");
    value = value.split(",");
    return value;
}

function transformHEX(values){
    let hexVal = "";
    for(let i = 0; i < values.length; i++){
        hexVal += hex[Math.floor(values[i]/16)];
        hexVal += hex[values[i]%16];
        values[i] = hexVal;
        hexVal = "";
    }
    return values;
}


btn.addEventListener('click', changeColor);
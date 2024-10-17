const prompt = require('prompt-sync')();
const inputString = prompt('Vui lòng nhập chuỗi: ');

function swapString(inputString) {
    let newString = "";
    for (let i = inputString.length - 1; i >= 0; i--) {
            newString += inputString[i];
    }
    return newString; 
}

console.log(swapString(inputString));


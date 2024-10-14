const prompt = require('prompt-sync')();
const inputString = prompt('Vui lòng nhập chuỗi: ');

function stringInput(inputString) {
    let regex = /[@#!{}[\]()]/g;
    let result = inputString.replace(regex, '');
    result = result.replace(/\s+/g,' ');
    result = result.trim();
    return result;
}

function processString(inputString) {
    if (stringInput(inputString) == "") {
        return "[]";
    } else {
        let words = stringInput(inputString).split(' ');
        let formatWords = words.map(word => {
            return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
        })
        formatWords.reverse();
        return formatWords;
    }
}

function average(inputString) {
    let arr = [];
    if (stringInput(inputString) == "") {
        return "[]";
    } else {
        let words = stringInput(inputString).split(' ');
        words.forEach(word => {
            if (!isNaN(word)) {
                arr.push(Number(word))
            }
        });
    }
    let sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum/arr.length
}

console.log(processString(inputString))
console.log(average(inputString))


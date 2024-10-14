const prompt = require('prompt-sync')();
const inputString = prompt('Vui lòng nhập mảng(các số cách nhau bằng dấu phẩy): ');
const arr = inputString.split(',').map(Number)


function increaseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1 ; j < arr.length; j++) {
            if (arr[i] > arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
    
}

function decreaseArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        for (let j = i+1; j < arr.length; j++) {
            if (arr[i] < arr[j]) {
                let temp = arr[i];
                arr[i] = arr[j];
                arr[j] = temp;
            }
        }
    }
    return arr;
}



console.log(increaseArray(arr));

console.log(decreaseArray(arr));


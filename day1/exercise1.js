const prompt = require('prompt-sync')();
const number = parseInt(prompt('Vui lòng nhập số: '));

function isPrime(number) {
    if (number <= 1) return false;
    for (let i = 2; i <= Math.sqrt(number); i++) {
        if (number % i === 0) return false;
    }
    return true;
}

function isPerfect(number) {
    if (number < 6) return false;
    let sum = 1;
    for (let i = 2; i <= number / 2; i++) {
        if (number % i === 0) sum += i;
    }
    return sum === number;
}

if (isPrime(number)) {
    console.log(`${number} là số nguyên tố.`);
} else {
    console.log(`${number} không phải là số nguyên tố.`);
}

if (isPerfect(number)) {
    console.log(`${number} là số hoàn hảo.`);
} else {
    console.log(`${number} không phải là số hoàn hảo.`);
}

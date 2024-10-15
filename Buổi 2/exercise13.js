const nums = -121;
const numString = nums.toString();

function palindromeNumber() {
    var reverseString = "";
    for (var i = numString.length-1; i >= 0; i--) {
        reverseString += numString[i]
    }
    return reverseString;
}
function isPalindromeNumber() {
    if (numString === palindromeNumber()) {
        return true;
    } else {
        return false
    }
}
console.log(isPalindromeNumber())

function isValidParentheses(s) {
    const openBrackets = [];

    for (let i = 0; i < s.length; i++) {
        const char = s[i];
        if (char === '(' || char === '[' || char === '{') {
            openBrackets.push(char);
        } else {
            const lastOpenBracket = openBrackets.pop();
            if (
                (char === ')' && lastOpenBracket !== '(') ||
                (char === ']' && lastOpenBracket !== '[') ||
                (char === '}' && lastOpenBracket !== '{')
            ) {
                return false;
            }
        }
    }

    return openBrackets.length === 0;
}

const inputString = "(}";
const isValid = isValidParentheses(inputString);

if (isValid) {
    console.log("True");
} else {
    console.log("False");
}

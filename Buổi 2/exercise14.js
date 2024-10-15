const strs = ["dog", "racecar", "car"]
function findShortest() {
    let shortest = strs[0];
    for (let i = 1; i < strs.length; i++) {
        if (strs[i].length < shortest.length) {
            shortest = strs[i];
        }
    }
    return shortest;
}

function prefix() {
    let text = findShortest(); 
    for (let i = 0; i < strs.length; i++) {
        while (strs[i].indexOf(text) !== 0) {
            text = text.substring(0, text.length - 1);
            if (text === "") return '""'; 
        }
    }
    return text;
}

console.log(prefix());

let obj = {
    ho: "pham",
    ten: "ngan"
}

let obj2 = {};
for (let key in obj) {
    obj2[key] = obj[key];
}
obj2.ho = "nguyen"
console.log(obj2)
console.log(obj)
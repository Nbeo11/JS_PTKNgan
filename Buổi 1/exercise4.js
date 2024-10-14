const prompt = require('prompt-sync')();
const email = prompt('Vui lòng nhập chuỗi: ');

function emailChecking(email) {
    let emailregex = new RegExp(/^[a-zA-Z0-9.!#$%&’+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:.[a-zA-Z0-9-]+)$/
    )
    if (emailregex.test(email)) {
        return true;
    } else {
        return false;
    }

}


console.log(emailChecking(email));


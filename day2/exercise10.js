let inputString = 'Tập đoàn Hyosung (Hàn Quốc) dự kiến đầu tư thêm 4 tỷ USD, nâng tổng số vốn rót vào Việt Nam lên gấp đôi.' +
    'Tại cuộc gặp Thủ tướng Phạm Minh Chính chiều 14/10, ông Cho Hyun-joon, Chủ tịch Tập đoàn Hyosung (Hàn Quốc), khẳng định môi trường đầu tư của Việt Nam rất đáng tin cậy. Ông tin rằng Việt Nam sẽ trở thành trung tâm sản xuất của châu Á.'

function clearString(inputString) {
    let regex = /[(),.]/g;
    let result = inputString.replace(regex, '');
    return result;
}
const slicedString = clearString(inputString).split(' ');

function findText() {
    let count = 0;
    let text;
    for (let i = 0; i < slicedString.length; i++) {
        if (slicedString[i].length > count) {
            count = slicedString[i].length;
            text = slicedString[i];
        }        
    }
    return text;
}
console.log(findText())
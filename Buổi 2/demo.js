function parent() {
    let count = 0;
    return function child() {
        count ++;
        console.log(count);
    }
}
 
const a =parent();

a();
a();
a()
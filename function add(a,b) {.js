function add(a,b) {
    return sum = a + b;
}
console.log(add(4, 5));
const names =['jihan','kabul','doly','kabul','jihan','hero','hero']

function removeDuplicate(names) {
    let unique = [];
    for (let element of names) {
        if (unique.indexOf(element) == -1) {
            unique.push(element)
        } 
    }
        return unique
}
console.log(removeDuplicate(names));
let items = [2, 4, 5, 65, 7, 8, 9, 76, 5, 67];
let element = 0
for (let i = 0; i < items.length; i++) {
    element += items[i];
    
    
}
function findAverage(item) {
    let element = 0
    console.log(item.length);
    for (let i = 0; i < item.length; i++) {
        element += item[i];
        console.log(element)
          
    }
    return element/item.length
    
}
console.log(findAverage(items));
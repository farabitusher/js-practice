function largestNumber(numbers) {
    let largest = numbers[0];
    for (let i = 0; i < numbers.length; i++) {
        const element = numbers[i];
        if (element>largest) {
            largest= element
        }
    }
    return largest
}
let arrNum = [2, 34, 56, 78, 90, 234];
console.log(largestNumber(arrNum))

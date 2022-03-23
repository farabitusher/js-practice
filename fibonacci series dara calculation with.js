//fibonacci series dara calculation with function
function fibonacciSeries(num) {
    let fibo = [0, 1];
    for (let i = 0; i <= num; i++) {
        fibo =fibo[i-1]+fibo[i-2]
        
    }
    return fibo 
}
console.log(fibonacciSeries(10));
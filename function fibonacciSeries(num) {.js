function fibonacciSeries(num) {
    let fibo = [0, 1];
    for (let i = 2; i <= num; i++) {
        fibo[i] =fibo[i-1]+fibo[i-2]
        
    }
    return fibo 
}
console.log(fibonacciSeries(3));
function add(a, b){
  return a + b;
}
console.log(add("adam" + "eve"))
const names =['jihan','kabul','doly','kabul','jihan']

function removeDuplicate(num) {
  let arr = []
  for( const element of names)
  console.log(element)
}
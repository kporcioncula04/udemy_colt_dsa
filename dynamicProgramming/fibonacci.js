function fib(n){
  if(n <=2) return 1;
  return fib(n-1) + fib(n-2)
}

console.log(fib(4))
console.log(fib(5))
console.log(fib(10))

//BIG O

//O(2^n) - not good
